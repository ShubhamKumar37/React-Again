import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const Protected = ({children, authentication = true}) => {

    const logStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if(authentication && logStatus !== authentication) navigate("/login");
        else if(!authentication && logStatus !== authentication) navigate("/");

        setLoader(false);
    }, [logStatus, authentication, navigate]);

    return (
    <>{children}</>
  )
}

export default Protected