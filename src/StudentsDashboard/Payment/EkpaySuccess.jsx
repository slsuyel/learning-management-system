import React from 'react';
import { useLocation } from 'react-router-dom';

const EkpaySuccess = () => {

    const location = useLocation();
    console.log(location);
    return (
        <div>
            EkpaySuccess
        </div>
    );
};

export default EkpaySuccess;