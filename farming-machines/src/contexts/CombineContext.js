import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as combineService from '../services/combineService';

export const CombineContext = createContext();

export const CombineProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [combines, setCombine] = useState([]);

    useEffect(() => {
        combineService.getAll()
            .then(result => {
                setCombine(result);
            })
            .catch(err => {
                window.alert(err);
            });

    }, []);

    const combineAdd = (combineData) => {
        setCombine(state => [
            ...state, 
            combineData,
        ]);

        navigate('/catalog');
    };

    const selectCombine = (combineId) => {
        return combines.find(x => x._id === combineId) || {};
    };

    const combineEdit = (combineId, combineData) => {
        setCombine(state => state.map(x => x._id === combineId ? combineData : x));
    };

    const combineRemove = (combineId) => {
        setCombine(state => state.filter(x => x._id !== combineId));
    };

    return (
        <CombineContext.Provider value={{
            combines,
            combineAdd,
            combineEdit,
            selectCombine,
            combineRemove,
        }}>
            {children}
        </CombineContext.Provider>
    );
}