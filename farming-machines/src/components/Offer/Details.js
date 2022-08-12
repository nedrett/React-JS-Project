import { useContext } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';

import { CombineContext } from '../../contexts/CombineContext';
import { AuthContext } from '../../contexts/AuthContext';
import { BuyOfferContext } from '../../contexts/BuyOfferContext';

import * as combineService from '../../services/combineService';
import * as buyOfferService from '../../services/buyOfferService';

export const OfferDetails = () => {
    const { selectCombine, combineRemove } = useContext(CombineContext);
    const { user, isAuthenticated } = useContext(AuthContext);
    const { offers, offerAdd } = useContext(BuyOfferContext)
    const { combineId } = useParams();
    const navigate = useNavigate();

    const currentCombine = selectCombine(combineId);

    const isOwner = user?._id === currentCombine._ownerId;

    const filteredOffers = offers.filter(x => currentCombine._id === x.offerId);

    let offerBoughtByUser = false;

    for (const offer of filteredOffers) {
        if (user?._id === offer.buyerId) {
            offerBoughtByUser = true;
        }
    }

    const onBuyClick = () => {
        const confirm = window.confirm('Are you sure want to Buy this Offer?');

        if (confirm) {
            buyOfferService.create({ offerId: currentCombine._id, _ownerId: currentCombine._ownerId, buyerId: user._id })
                .then(result => {
                    offerAdd(result)
                })
                .catch(err => {
                    window.alert(err);
                });

            navigate('/contacts');
        }
    }

    const deleteHandler = () => {
        const confirm = window.confirm('Are you sure want to delete this Offer?');

        if (confirm) {
            combineService.remove(combineId)
                .then(() => {
                    combineRemove(combineId);
                    navigate('/catalog');
                })
        }
    }

    return (
        <main>
            <section id="offer-details">
                <h1>Offer Details</h1>
                <div className="info-section">
                    <div className="offer-header">
                        <img className="offer-img" src={currentCombine.imageUrl} alt="" />
                        <h1>{currentCombine.name} {currentCombine.model}</h1>
                        <span className="brand">Brand: {currentCombine.name}</span>
                        <p className="model">Model: {currentCombine.model}</p>
                        <p className="width">Header Width: {currentCombine.width}</p>
                    </div>
                    <div className="text">
                        <h3>Description:</h3>
                        {currentCombine.summary}
                    </div>
                    <>
                        <div className="buttons">
                            {isAuthenticated &&
                                <>
                                    {isOwner
                                        ? <>
                                            < Link to={`/offer/${combineId}/edit`} className="button">
                                                Edit
                                            </Link>
                                            <button onClick={deleteHandler} className="button">
                                                Delete
                                            </button>
                                        </>
                                        : <>
                                            {!offerBoughtByUser &&
                                                <button onClick={onBuyClick} className="button buy-btn">
                                                    Buy
                                                </button>
                                            }
                                        </>
                                    }
                                </>
                            }

                            <button onClick={() => navigate(-1)} className="button">
                                Back
                            </button>

                            {offerBoughtByUser &&
                                <div className="no-offers">You have already sent a buy request for this offer</div>
                            }
                        </div>
                    </>
                </div>
            </section >
        </main >
    );
}