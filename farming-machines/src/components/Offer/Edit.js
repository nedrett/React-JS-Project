import { useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import { CombineContext } from "../../contexts/CombineContext";
import * as combineService from '../../services/combineService';

export const OfferEdit = () => {
    const { combineEdit, selectCombine } = useContext(CombineContext);
    const { combineId } = useParams();
    const navigate = useNavigate();

    const currentCombine = selectCombine(combineId);

    const onSubmit = (e) => {
        e.preventDefault();

        const combineData = Object.fromEntries(new FormData(e.target));

        combineService.edit(combineId, combineData)
            .then(result => {
                combineEdit(combineId, result);
                navigate(`/offer/${combineId}`);
            })
            .catch(err => {
                window.alert(err);
            });
    }

    return (
        <main className="edit-offer">
            <section id="edit-page" className="edit-page">
                <form id="edit" onSubmit={onSubmit}>
                    <div className="container">
                        <h1>Edit Offer</h1>
                        <label className="input-title" htmlFor="combine-title">Combine Name</label>
                        <input
                            type="text"
                            id="title"
                            name="name"
                            defaultValue={currentCombine.name}
                        />
                        <label className="input-title" htmlFor="model">Model:</label>
                        <input
                            type="text"
                            id="category"
                            name="model"
                            defaultValue={currentCombine.model}
                        />
                        <label className="input-title" htmlFor="width">Header Width:</label>
                        <input
                            type="text"
                            id="category"
                            name="width"
                            defaultValue={currentCombine.width}
                        />
                        <label className="input-title" htmlFor="combine-img">Image:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            defaultValue={currentCombine.imageUrl}
                        />
                        <label className="input-title" htmlFor="descriptio">Description:</label>
                        <textarea name="summary" id="summary" defaultValue={currentCombine.summary} />
                        <button className="btn submit" type="submit" defaultValue="Create Offer"> Edit </button>
                    </div>
                </form>
            </section>
        </main>
    );
}