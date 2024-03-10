import React from 'react';
import './Arafat.css'
import { Link } from 'react-router-dom';
const ArafatHome = () => {
    return (
        <>
            <section id="main_hero" className="text-white py-5">
                <div className="container">
                    <div className="wrap-sec row">
                        <div id="hero-sec-left" className="text-left col-md-5 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-center">Convey Your Ideas to Us</h2>
                            <p className="text-center">
                                Contact us for questions, technical assistance, or collaboration
                                opportunities via the contact information provided.
                            </p>
                        </div>
                        <div id="form_01" className="col-md-7">
                            <div className="mx-5">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="floatingInput">Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="floatingInput">Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="floatingInput">Phone Number</label>
                                        <input type="tel" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="floatingInput">Coupon Code</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <Link to='/signup' type="submit" className="btn btn-secondary btn-block w-100 mt-3">
                                        SIGN UP
                                    </Link>
                                    <div className="text-center mt-3">
                                        <Link to='/signup' className="text-white">Or LOGIN</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Pricing Section */}
            <section id="pric" className="py-5">
                <div className="wrap_div mx-5">
                    <div className="container">
                        <h2 id="pr_title" className="text-center mb-4">
                            Course Price
                        </h2>
                        <div className="row">
                            {/* Free Plan */}
                            <div id="card_iteam" className="col-md-4">
                                <div className="card mb-4 px-3 py-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Free</h5>
                                        <h1 className="card-title">Free</h1>
                                        <p className="card-text">
                                            forever free for individuals and small teams up to 3 users
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>Unlimited Access</li>
                                            <li>100MB Storage</li>
                                            <li>3 Users</li>
                                            <li>Unlimited Tasks</li>
                                        </ul>
                                        <a href="#" className="btn btn-primary btn-block">Start for free</a>
                                    </div>
                                </div>
                            </div>
                            {/* Unlimited Plan */}
                            <div id="card_iteam" className="col-md-4">
                                <div className="card mb-4 px-3 py-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Unlimited</h5>
                                        <h1 className="card-title">$29</h1>
                                        <p className="card-text">
                                            per user/month billed yearly, $39 billed monthly
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>All in Free +</li>
                                            <li>Unlimited Guests</li>
                                            <li>Priority Support</li>
                                            <li>Smart Notifications</li>
                                        </ul>
                                        <a href="#" className="btn btn-primary btn-block">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Enterprise Plan */}
                            <div id="card_iteam" className="col-md-4">
                                <div className="card mb-4 px-3 py-3">
                                    <div className="card-body">
                                        <h5 className="card-title">Enterprise</h5>
                                        <h1 className="card-title">$35</h1>
                                        <p className="card-text">
                                            per user/month billed yearly, $45 billed monthly
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>All in Unlimited +</li>
                                            <li>Bulk Export</li>
                                            <li>Advanced Analytics</li>
                                            <li>Advanced Security</li>
                                        </ul>
                                        <a href="#" className="btn btn-primary btn-block">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section className="bg-foot text-white py-5 px-3">
                <div className="container">
                    <div className="wrap row">
                        <div id="wrap_left" className="foot_left col-md-6">
                            <h2 className="text-start mb-4">Get In Touch</h2>
                            <div id="hero-sec-left">
                                <h2 className="text-center mb-4">Convey Your Ideas to Us</h2>
                                <p className="text-center mb-4">
                                    Contact us for questions, technical assistance, or collaboration
                                    opportunities via the contact information provided.
                                </p>
                            </div>
                            <div className="container text-start">
                                <p className="mb-3"><i className="fas fa-phone" /> +123-456-7890</p>
                                <p className="mb-3">
                                    <i className="fas fa-envelope" /> hello@reallygreatsite.com
                                </p>
                                <p className="mb-3">
                                    <i className="fas fa-map-marker-alt" /> 123 Anywhere ST, Any City,
                                    12345
                                </p>
                            </div>
                        </div>
                        <div className="foot_right col-md-6">
                            <div className="main_from py-4">
                                <form className="row g-3">
                                    <div className="form-group col-12">
                                        <label htmlFor="floatingInput">Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="floatingInput">Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="floatingInput">Phone Number</label>
                                        <input type="tel" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="floatingInput">Message</label>
                                        <textarea className="form-control" defaultValue={""} />
                                    </div>
                                    <button id="sub_btn" type="submit" className="btn btn-secondary">
                                        SUBMIT NOW
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
            <footer className="bg-dark text-white py-4" />


        </>
    );
};

export default ArafatHome;