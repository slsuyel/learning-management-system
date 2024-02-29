import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useStudent from '../../hooks/useStudent';
import { Card } from 'antd';

const Affiliate = () => {
    const studentId = localStorage.getItem("studentId");
    const { isLoading } = useStudent(studentId, `/api/students/profile`);
    const [couponCode, setCouponCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [generated, setGenerated] = useState(false);

    // Function to generate a random string of alphabets
    const generateRandomText = () => {
        const length = 3;
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const generateCouponCode = () => {
        setLoading(true);
        const year = new Date().getFullYear();
        const text = generateRandomText(); // Generating random text
        const code = `${year}${studentId}${text}`; // Generating the code
        setCouponCode(code);
        setLoading(false);
        setGenerated(true);
        localStorage.setItem("couponCode", code); // Storing in local storage
    };

    return (
        <div className="container  text-center">

            <div className="row">
                <div className=" fw-bold text-secondary mx-auto">
                    <h3 className='fs-1 fw-semibold'>অ্যাফিলিয়েশন প্রোগ্রাম</h3>
                    <p className='fs-6 fw-semibold'> অসংখ্য প্রোডাক্ট নিজের পছন্দের প্ল্যাটফর্মে পোস্ট করে শুরু করুন আয় করা।  আসুন জেনে নেই কিভাবে সহজ ৩টি ধাপে আপনি হয়ে উঠবেন একজন সফল অ্যাফিলিয়েট পার্টনার।</p>
                </div>

                <div className="col-md-4 my-1">

                    <Card>

                        <h2>   ১. রেজিস্ট্রেশন করুন</h2>
                        <p>   সহজেই কয়েকটি ধাপে রেজিস্ট্রেশন করে যুক্ত হয়ে যান অ্যাফিলিয়েশন প্রোগ্রামে।</p>
                    </Card>

                </div>
                <div className="col-md-4 my-1">

                    <Card>

                        <h2>   ১. রেজিস্ট্রেশন করুন</h2>
                        <p>   সহজেই কয়েকটি ধাপে রেজিস্ট্রেশন করে যুক্ত হয়ে যান অ্যাফিলিয়েশন প্রোগ্রামে।</p>
                    </Card>

                </div>
                <div className="col-md-4 my-1">

                    <Card>

                        <h2>   ১. রেজিস্ট্রেশন করুন</h2>
                        <p>   সহজেই কয়েকটি ধাপে রেজিস্ট্রেশন করে যুক্ত হয়ে যান অ্যাফিলিয়েশন প্রোগ্রামে।</p>
                    </Card>

                </div>

                <div className="col-md-4 my-1">
                    <Card >
                        <div>
                            <Button
                                variant="primary"
                                onClick={generateCouponCode}
                                disabled={loading || generated} // Disable button if loading or code already generated
                            >
                                {loading ? (
                                    <>
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                        Generating Coupon Code...
                                    </>
                                ) : (
                                    generated ? "Code Generated" : "Generate Coupon"
                                )}
                            </Button>
                        </div>
                        {couponCode && (
                            <div className="mt-3">
                                <strong>Your Affiliate Coupon Code:</strong> {couponCode}
                            </div>
                        )}
                    </Card>
                </div>


            </div>


        </div>
    );
};

export default Affiliate;
