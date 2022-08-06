import { useContext } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';

import { CombineContext } from '../../contexts/CombineContext';
import { AuthContext } from '../../contexts/AuthContext';

import * as combineService from '../../services/combineService';

export const OfferDetails = () => {
    const { selectCombine, combineRemove } = useContext(CombineContext);
    const { user, isAuthenticated } = useContext(AuthContext);
    const { combineId } = useParams();
    const navigate = useNavigate();

    const currentCombine = selectCombine(combineId);

    const isOwner = user?._id === currentCombine._ownerId;

    const deleteHandler = () => {
        const confirm = window.confirm('Are you sure you want to delete this Offer?');

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


                    <div className="buttons">
                        {isAuthenticated && !isOwner &&
                            <div className="buy-btn">
                                <Link to={`/contacts`} className="button buy-btn">
                                    Buy
                                </Link>
                            </div>
                        }
                        {isOwner &&
                            <>

                                <Link to={`/offer/${combineId}/edit`} className="button">
                                    Edit
                                </Link>
                                <button onClick={deleteHandler} className="button">
                                    Delete
                                </button>
                            </>
                        }
                        <button onClick={() => navigate(-1)} className="button">
                            Back
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}