import { createContext, useState, useEffect } from "react";

import * as buyOfferService from '../services/buyOfferService';

export const BuyOfferContext = createContext();

export const BuyOfferProvider = ({
    children
}) => {

    const [offers, setOffers] = useState();

    useEffect(() => {
        buyOfferService.getAll()
            .then(result => {
                setOffers(result);
            })
            .catch(err => {
                window.alert(err);
            });

    }, []);

    const offerAdd = (boughtOfferData) => {
        setOffers(state => [
            ...state,
            boughtOfferData,
        ]);
    };

    return (
        <BuyOfferContext.Provider value={{
            offers,
            offerAdd
        }}>
            {children}
        </BuyOfferContext.Provider>
    );
}