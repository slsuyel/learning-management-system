import React, { useState } from 'react';
import '../Styles/StuDashboard.css'
import bkash from '../../assets/icons/bKash.svg'
import nagad from '../../assets/icons/nagad.png'
import ekpay from '../../assets/icons/ekpay.png'
import { Button } from 'antd';
import { useLocation, useParams } from 'react-router-dom';
import BackBtn from '../../components/ui/BackBtn';
import useSingleCourse from '../../hooks/useSingleCourse';

import { callApi } from '../../utilities/functions';
import useStudent from '../../hooks/useStudent';
const PayNow = () => {
    const currentUrl = window.location.href;
    const domain = currentUrl.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/g)[0];

    const { id } = useParams()
    const sid = localStorage.getItem("studentId")
    const [method, setMethod] = useState(null)
    const [loading, setLoading] = useState(false)
    const { details, isLoading } = useSingleCourse(id)
    const amount = Number(details.price)

    const { studentData, isLoading: stLoading } = useStudent(sid, `/api/students/profile`)



    console.log(studentData);


    const handlePayment = async () => {
        setLoading(true);
        console.log({ amount, sid });
        /* if (method == "bkash" && amount && sid) {
            console.log(domain);
            const bkashPay = await callApi("post", "/api/create/payment", { amount, student_id: sid, callbackURL: `${`https://lms-2023.netlify.app`}/waiting`, course_id: details.id },)
            console.log(bkashPay);
            window.location.href = bkashPay.bkashURL;
            setLoading(false)
        }
        else */
        if (method == "ekpay" && amount && sid) {
            const ekpay = await callApi('post', '/api/create/payment/ekpay', { amount, student_id: sid, callbackURL: `https://s2a-e.shop/waiting`, course_id: details.id })
            window.location.href = ekpay;
            setLoading(false)
        }
    }

    return (
        <section id="checkout_courses" >
            <div className='fs-4 text-custom'>
                <BackBtn />
            </div>


            <div className="container ">

                <div className="row">
                    <div className="col-xl-6 col-lg-6 mt-5">
                        <div className="checkout_wrapper">
                            <div className="checkout_header">
                                <h3>অর্ডার ডিটেইলস</h3>
                                <p>অর্ডারের বিস্তারিত</p>
                            </div>
                            <div className="order_details">
                                <div className="detail">
                                    <div className="detail-cap">
                                        <img src="https://www.talentlms.com/old/wp-content/uploads/2018/09/important-elements-of-online-learning-courses.jpg" alt="" height="100%" />
                                    </div>
                                </div>
                                <div className="order_details_description">
                                    <div className="data">
                                        <h3>{details?.course_name}</h3>
                                        <p>{details?.instructor}</p>
                                    </div>
                                    <div className="order_details_price">
                                        <p>{details.price} টাকা</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mt-5">
                        <div className="cart_price_content d-lg-flex">
                            <h3 >চেক আউট</h3>
                            <div >
                                <div className="cart_prices">
                                    <p className="title">কোর্স মূল্য</p>
                                    <p className="price">{details.price} টাকা</p>
                                </div>
                            </div>
                            {/* <h4 className="coupon_title">কুপণ</h4>
                            <div className="order_details">
                                <input type="text" placeholder="Enter Your Coupon" className="coupon_area " />
                                <div className="order_details_price"></div>
                                <div className="detail">
                                    <button className="btn-apply border-0">এপ্লাই</button>
                                </div>
                            </div> */}
                            <hr className='mrhr' style={{ margin: '0px' }} />
                            <div className="cart_prices">
                                <p className="title"><b >মোট মূল্য</b></p>
                                <p className="price">{details.price} টাকা</p>
                            </div>
                            <div >
                                <div className="checkout_header mt-3 mb-2 mb-0">
                                    <h3 >পেমেন্ট মেথড সিলেক্ট করুন</h3>
                                    <p >পেমেন্ট মেথড সিলেক্ট করুন</p>
                                </div>
                                <div className="row">
                                    {/* <div className="col-6">
                                        <button onClick={() => setMethod('bkash')} className={`border-1 border-secondary-subtle btn p-1 rounded-3 ${method == 'bkash' ? 'bg-body-tertiary' : ''}`}>
                                            <img width={125} src={bkash} alt="" />
                                        </button>
                                    </div> */}

                                    {/* <div className="col-6">
                                        <button onClick={() => setMethod('nagad')} className={`border-1 border-secondary-subtle btn p-1 rounded-3 ${method == 'nagad' ? 'bg-body-tertiary' : ''}`}>
                                            <img src={nagad} alt="" width={120} />
                                        </button>
                                    </div> */}
                                    <div className="col-6">
                                        <button onClick={() => setMethod('ekpay')} className={`border-1 border-secondary-subtle btn p-1 rounded-3 ${method == 'ekpay' ? 'bg-body-tertiary' : ''}`}>
                                            <img width={125} src={ekpay} alt="" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <Button onClick={() => handlePayment(method)} disabled={!method || isLoading || loading || amount == 0} className="d-flex justify-content-between">
                                <span >{loading ? 'Please wait' : 'পেমেন্ট করুন'}</span>
                                <span className="btn_amount_font">{details.price || 0} টাকা</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PayNow;