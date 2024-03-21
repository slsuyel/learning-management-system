import React, { useState } from 'react';
import './Arafat.css'
import { Link, useNavigate } from 'react-router-dom';
import { callApi } from '../utilities/functions';
import { toast } from 'react-toastify';
const ArafatHome = () => {
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const defaultValue = {
        attachment_file: 'n/a',
        company_name: 'na',
        location: 'na',
        business_category: 'na',
        founder_gender: 'N/A',
    }


    const [formData, setFormData] = useState({
        founder_name: '',
        founder_email: '',
        founder_phone: '',
        ref_code: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignUp = async (e) => {
        setLoader(true);
        e.preventDefault();

        const res = await callApi('Post', '/api/students', { ...defaultValue, ...formData });

        if (res.founder_name) {
            toast.success('Signup successfully!', {
                position: toast.POSITION.TOP_RIGHT
            });
            setLoader(false);
            navigate('/student/signin')
        }
        else {
            toast.error('Something went wrong !!', {
                position: toast.POSITION.TOP_CENTER
            });
            setLoader(false);
        }
    }


    return (
        <>
            <section id="main_hero" className="text-white py-5">
                <div className="container">
                    <div className="wrap-sec row">
                        <div id="hero-sec-left" className="text-left col-md-5 d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-center">Monetize Your Facebook Page</h2>
                            <p className="text-center">
                                Enrollment is going on completely free or 75% discount and win an attractive laptop by affiliate
                            </p>
                        </div>
                        <div id="form_01" className="col-md-7">
                            <div className="mx-5">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="founder_name">Name</label>
                                        <input
                                            required
                                            type="text" className="form-control" id="founder_name" name="founder_name" value={formData.founder_name} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="founder_email">Email</label>
                                        <input
                                            required
                                            type="email" className="form-control" id="founder_email" name="founder_email" value={formData.founder_email} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="founder_phone">Phone Number</label>
                                        <input
                                            required
                                            type="number" className="form-control" id="founder_phone" name="founder_phone" value={formData.founder_phone} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="founder_phone">Referral</label>
                                        <input

                                            type="text" className="form-control" id="ref_code" name="ref_code" value={formData.ref_code} onChange={handleChange} />
                                    </div>



                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            required
                                            type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                                    </div>
                                    <div className='align-items-center d-flex justify-content-between mt-3'>
                                        <button disabled={loader} onClick={handleSignUp} type="submit" className="btn btn-warning fw-bold w-50">
                                            SIGN UP
                                        </button>
                                        <div className="">
                                            <Link to='/student/signin' className="text-white">Or LOGIN</Link>
                                        </div>
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
                            Courses
                        </h2>
                        <div className="row">
                            {/* Free Plan */}
                            <div id="card_iteam" className="col-md-4">
                                <div className="bg-foot border mb-4 px-3 py-3 rounded-4 text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Free</h5>
                                        <h1 className="card-title">Free</h1>
                                        {/* <h1 className="card-title">Free</h1>
                                        <p className="card-text">
                                            forever free for individuals and small teams up to 3 users
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>Unlimited Access</li>
                                            <li>100MB Storage</li>
                                            <li>3 Users</li>
                                            <li>Unlimited Tasks</li>
                                        </ul> */}
                                        <p>Those who want to do our course completely free can join our website and do the course for free through affiliate program. By creating an account on the website you will receive a unique affiliate link. Through which if you enroll someone in our course then you will get 20% affiliate bonus of the course fee. By getting only five people to join you can activate your ID completely free and join our course.</p>
                                        <a href="/signup" className="btn btn-primary btn-block">Start for free</a>
                                    </div>
                                </div>
                            </div>
                            {/* Unlimited Plan */}
                            <div id="card_iteam" className="col-md-4">
                                <div className="bg-foot border mb-4 px-3 py-3 rounded-4 text-white">
                                    <div className="card-body">
                                        <h5 className="card-title ">Facebook Monetization Course- 75% Discounts</h5>
                                        <h1 className="card-title">2500 ৳</h1>
                                        <p className="card-text">
                                            What you can learn through this package:
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>All Kinds of Tips to Monetize Facebook Page</li>
                                            <li>Providing Free Earning Generate Bot</li>
                                            <li>All Kinds of Tips to Monetize YouTube Channel</li>

                                        </ul>
                                        <a href="/courses" className="btn btn-primary btn-block">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Enterprise Plan */}
                            <div id="card_iteam" className="col-md-4">
                                <div className="bg-foot border mb-4 px-3 py-3 rounded-4 text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Web Design and Development Course - Enterprise</h5>
                                        <h1 className="card-title">10000৳</h1>
                                        {/* <p className="card-text">
                                            per user/month billed yearly, $45 billed monthly
                                        </p>
                                        <ul className="list-unstyled">
                                            <li>All in Unlimited +</li>
                                            <li>Bulk Export</li>
                                            <li>Advanced Analytics</li>
                                            <li>Advanced Security</li>
                                        </ul> */}
                                        <h5 className='py-5 my-5 text-center'>Upcoming</h5>
                                        <a href="/courses" className="btn btn-primary btn-block">Buy Now</a>
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
                                <h2 className="text-center mb-4">Syed Shaharear Arafat
                                </h2>
                                <p className="text-center mb-4">
                                    Project Manager and Trainer (Government Her Power Project, Sheikh Kamal IT Incubation Center Project, LEDP Project etc.)
                                </p>
                            </div>
                            <div className="container text-start">
                                <p className="mb-3"><i className="fas fa-phone" /> +8801703658487</p>
                                <p className="mb-3">
                                    <i className="fas fa-envelope" /> s2adigitalworld@gmail.com
                                </p>
                                <p className="mb-3">
                                    <i className="fas fa-map-marker-alt" />

                                    <a className='text-white ms-1' href="https://web.facebook.com/SYED.SHAHAREAR.ARAFAT">Syed Shaharear Arafat</a>

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