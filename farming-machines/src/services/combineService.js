import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/combines';

export const getAll = () => request.get(baseUrl);

export const create = (combineData) => request.post(baseUrl, combineData);