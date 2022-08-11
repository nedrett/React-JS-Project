import { useContext } from "react";
import { Outlet, useParams, Navigate } from 'react-router-dom';

import { AuthContext } from "../../contexts/AuthContext";
import { CombineContext } from "../../contexts/CombineContext";

export const CombineOwner = () => {
    const { selectCombine } = useContext(CombineContext);
    const { user, isAuthenticated } = useContext(AuthContext);
    const { combineId } = useParams();

    const currentCombine = selectCombine(combineId);

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    } else if (user._id !== currentCombine._ownerId) {
        return <Navigate to='/catalog' replace />
    }

    return <Outlet />;
};