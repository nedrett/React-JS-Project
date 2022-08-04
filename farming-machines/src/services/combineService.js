import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/combines';

export const getAll = () => request.get(baseUrl);

export const create = (combineData) => request.post(baseUrl, combineData);

export const edit = (combineId, combineData) => request.put(`${baseUrl}/${combineId}`, combineData);

export const remove = (combineId) => request.del(`${baseUrl}/${combineId}`);

export const search = (searchWord) => request.get(`${baseUrl}?where=model ${encodeURI(searchWord)}`);