import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StarIcon from '../../components/ui/StarIcon';
import '../Styles/StuDashboard.css'
import { Button } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import CourseCurriculum from '../CourseCurriculum';


const CoursesDetails = () => {
    const navigate = useNavigate()

    const location = useLocation()
    const details =
    {
        id: 454554544,
        title: "গ্রাফিক্স ডিজাইন",
        instructor: "Dinar Minhaj",
        rating: 5,
        category: "Typography",
        price: 3000,
        previousPrice: 4000,
        discount: "২৫% ছাড়",
        aboutVideo: '',
        targetedAudiance: '  ডিজাইন সেক্টরে যদি ক্যারিয়ার ডেভেলপ করতে চান তাহলে এই কোর্সটি আপনার জন্যই। লোকাল মার্কেটে ক্যারিয়ার গড়তে পারবেন। এছাড়া আপনি যদি ইন্টারন্যাশনাল মার্কেটে সফল Freelancer হিসেবে ক্যারিয়ার ডেভেলপ করতে চান সেক্ষেত্রেও আমাদের এই কোর্সটি অনেক হেল্পফুল হবে।',
        whatUlearn: [
            "১১+ ঘন্টার ভিডিও টিউটোরিয়াল",
            "৪০+ ভিডিও",
            "২০+ প্রজেক্ট",
            "প্র্যাক্টিস রিসোর্সেস",
            "ফ্রিল্যান্সিং গাইডলাইন",
            "লাইফ টাইম এক্সেস",
            "কোর্স শেষে সার্টিফিকেট"
        ],
        descriptions: "   ক্রিয়েটিভ প্রফেশন হিসেবে গ্রাফিক্স ডিজাইন-এর বাজার অনেক বিস্তৃত। লোকাল এবং ইন্টারন্যাশনাল মার্কেটে কাজের প্রচুর সুযোগ। স্কিল অর্জনের মাধ্যমে এই সেক্টরে ক্যারিয়ার ডেভেলপ করতে কোর্সটিতে এনরোল করুন। ক্রিয়েটিভ প্রফেশন হিসেবে গ্রাফিক্স ডিজাইন- এর বাজার অনেক বিস্তৃত। লোকাল এবং ইন্টারন্যাশনাল মার্কেটে কাজের প্রচুর সুযোগ। স্কিল অর্জনের মাধ্যমে এই সেক্টরে ক্যারিয়ার ডেভেলপ করতে কোর্সটিতে এনরোল করুন।ক্রিয়েটিভ প্রফেশন হিসেবে গ্রাফিক্স ডিজাইন-এর বাজার অনেক বিস্তৃত। লোকাল এবং ইন্টারন্যাশনাল মার্কেটে কাজের প্রচুর সুযোগ। স্কিল অর্জনের মাধ্যমে এই সেক্টরে ক্যারিয়ার ডেভেলপ করতে কোর্সটিতে এনরোল করুন।",
        demoCertificate: "https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg",
        requirements: "কোর্সটি করতে ফটোশপ এবং ইলাস্ট্রেটর সফটওয়্যার জানা থাকলে শিক্ষার্থীদের জন্য সুবিধা হবে। ",

        features: [
            "১১+ ঘন্টার ভিডিও টিউটোরিয়াল",
            "৪০+ ভিডিও",
            "২০+ প্রজেক্ট",
            "প্র্যাক্টিস রিসোর্সেস",
            "ফ্রিল্যান্সিং গাইডলাইন",
            "লাইফ টাইম এক্সেস",
            "কোর্স শেষে সার্টিফিকেট"
        ]
    }

    const handlePaynow = () => {
        navigate('/user-db/payment')
    }

    return (
        <section>

            <div className=" col-md-8 mx-auto mb-3 mb-5">
                <video controls width="100%" >
                    <source src={details.aboutVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>



            <div className="row mx-auto">
                <div className="col-md-7">   <div>
                    <h4>{details.category}   </h4>
                    <div className='align-items-baseline d-flex justify-content-between text-capitalize flex-wrap'>
                        <h3 className='fs-1'>{details.title}</h3>  <h5 className='fs-4 fw-bold text-success-emphasis'>instructor : {details.instructor}</h5>
                    </div>

                    <p className='fs-5 text-secondary'>
                        {details.descriptions}
                    </p>
                </div>


                </div>

                <div className="col-md-5">
                    <div className="col-md-10 mx-auto durationbox ">
                        <div className='align-items-center d-flex fs-5 gap-3 justify-content-center my-2'>
                            <div className='d-flex gap-1'>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            ({details.rating} রিভিউ)
                        </div>

                        <ul className="durationlist">
                            {details.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>

                        <div>
                            <h2 className=" fw-bold text-custom">
                                ফি {details.price} টাকা
                            </h2>
                        </div>
                        <div className="buttonbox">
                            <div className="text-center">
                                <Button onClick={handlePaynow} size='large' type="primary" className="btn-learn w-75 ">
                                    কোর্সটি কিনুন
                                </Button>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <Button size='large' type="danger" className="bg-warning" icon={<HeartOutlined />}>
                                    ফেভারিট
                                </Button>
                                <Button size='large' type="success" className=" bg-black" icon={<ShoppingCartOutlined />}>
                                    কার্টে যুক্ত করুন
                                </Button>
                            </div>
                        </div>
                    </div >
                </div>


            </div >



            <div className="row mx-auto my-3">
                <div className="col-md-6 my-2">
                    <div className='waht-learn-li'>
                        <h3>এই কোর্স থেকে কী কী শিখবেন?</h3>

                        <ul>
                            {details.whatUlearn.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 my-2">
                    <div>
                        <h4>কোর্স  শেষ করে আমাদের সার্টিফিকেট তো থাকছেই</h4>

                        <img loading='lazy' className='img-fluid mt-3 rounded' src={details.demoCertificate} alt="" />
                    </div>
                </div>
            </div>

            <CourseCurriculum />

            <div>
                <h3> এই কোর্সটি যাদের জন্য</h3>
                <p>{details.targetedAudiance}</p>

                <h3>     কোর্স রিকুয়ারমেন্ট</h3>
                <p>{details.requirements}</p>
            </div>




        </section >
    );
};

export default CoursesDetails;