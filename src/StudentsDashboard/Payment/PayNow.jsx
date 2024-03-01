import React, { useState } from 'react';
import '../Styles/StuDashboard.css'
import bkash from '../../assets/icons/bKash.svg'
import nagad from '../../assets/icons/nagad.png'
import { Button } from 'antd';
import { useParams } from 'react-router-dom';
const PayNow = () => {

    const { id } = useParams()
    console.log(id);

    const [method, setMethod] = useState(null)

    return (
        <section id="checkout_courses" >
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
                                        <img src="https://api.brightskills.com/course/MS PowerPoint Advanced Course/558-X-364_Course-Banner_2-of-MS-PowerPoint-Advanced-Course.jpg" alt="" height="100%" />
                                    </div>
                                </div>
                                <div className="order_details_description">
                                    <div className="data">
                                        <h3>MS PowerPoint Advanced Course</h3>
                                        <p>Tirthendu Halder Rana</p>
                                    </div>
                                    <div className="order_details_price">
                                        <p>১১৯৯ টাকা</p>
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
                                    <p className="price">১১৯৯ টাকা</p>
                                </div>
                            </div>
                            <h4 className="coupon_title">কুপণ</h4>
                            <div className="order_details">
                                <input type="text" placeholder="Enter Your Coupon" className="coupon_area " />
                                <div className="order_details_price"></div>
                                <div className="detail">
                                    <button className="btn-apply border-0">এপ্লাই</button>
                                </div>
                            </div>
                            <hr className='mrhr' style={{ margin: '0px' }} />
                            <div className="cart_prices">
                                <p className="title"><b >মোট মূল্য</b></p>
                                <p className="price">১১৯৯ টাকা</p>
                            </div>
                            <div >
                                <div className="checkout_header mt-3 mb-2 mb-0">
                                    <h3 >পেমেন্ট মেথড সিলেক্ট করুন</h3>
                                    <p >যে কোন একটি পেমেন্ট মেথড সিলেক্ট করুন</p>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <button onClick={() => setMethod('bkash')} className={`border-1 border-secondary-subtle btn p-1 rounded-3 ${method == 'bkash' ? 'bg-success-subtle' : ''}`}>
                                            <img src={bkash} alt="" />
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button onClick={() => setMethod('nagad')} className={`border-1 border-secondary-subtle btn p-1 rounded-3 ${method == 'nagad' ? 'bg-success-subtle' : ''}`}>
                                            <img src={nagad} alt="" width={120} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <Button disabled={!method} className="d-flex justify-content-between">
                                <span >পেমেন্ট করুন</span>
                                <span className="btn_amount_font">১১৯৯ টাকা</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PayNow;