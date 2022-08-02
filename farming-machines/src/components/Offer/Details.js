import { useContext } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';

import { CombineContext } from '../../contexts/CombineContext';

import * as combineService from '../../services/combineService';

export const OfferDetails = () => {
    const { selectCombine } = useContext(CombineContext);
    const { combineId } = useParams();
    const navigate = useNavigate();

    const currentCombine = selectCombine(combineId);


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
                    <p className="text"> 
                    <h3>Description:</h3> 
                        {currentCombine.summary}
                    </p>

                    {/* Edit/Delete buttons ( Only for creator of this game )  */}
                    <div className="buttons">
                        <Link to={`/offer/${combineId}/edit`} className="button">
                            Edit
                        </Link>
                        <Link to="/offer/delete" className="button">
                            Delete
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}