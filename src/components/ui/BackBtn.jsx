import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();

    return (
        <i onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} className="fa-solid fa-circle-arrow-left"></i>
    );
};

export default BackBtn;
