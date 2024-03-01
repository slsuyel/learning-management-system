import React from 'react';

const DbContainer = ({ children }) => {
    return (
        <div className='content-wrapper'>
            <div className="content-header">
                {children}
            </div>
        </div>
    );
};

export default DbContainer;