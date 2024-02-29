import React from 'react';

const Setting = () => {
    return (
        <div className="container mt-4">
            <h1>User Settings</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </div>
        </div>
    );
};

export default Setting;
