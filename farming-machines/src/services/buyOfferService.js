import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/offers';

export const getAll = () => request.get(baseUrl);

export const create = (boughtOfferData) => request.post(baseUrl, boughtOfferData);