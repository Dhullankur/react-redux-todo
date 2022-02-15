import React, { useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const MainLayout = () => {
    const token = useSelector(state => state.userReducer.token);
    const {pathname} = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate('/todos');
        } else {
            const unAuth = ['/', '/register'];
            if(unAuth.includes(pathname)){
                navigate(pathname)
            }else{
                navigate('/')
            }
        }
    }, [token,navigate,pathname]);

    return <Outlet />
};

