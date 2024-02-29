import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/StuDashboard.css';
import useStudent from '../../hooks/useStudent';
import { Card } from 'antd';

const AllCourses = () => {
    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)
    // console.log(studentData);
    const [selectedCategory, setSelectedCategory] = useState({ name: "ডিজাইন", url: "/category/design", description: 'প্রযুক্তি নির্ভরতা বৃদ্ধির সাথে সাথে ডিজাইন সেক্টরে ক্যারিয়ার সুযোগ বিস্তৃত হচ্ছে। ডিজাইন সেক্টরে আপনার পছন্দের যে . . ', subCategories: ["লোগো ডিজাইন", "প্রিন্ট ডিজাইন", "গ্রাফিক্স ডিজাইন", "মোশন গ্রাফিক্স"] });

    const courses = [
        {
            name: "ডিজাইন",
            url: "/category/design",
            description: 'প্রযুক্তি নির্ভরতা বৃদ্ধির সাথে সাথে ডিজাইন সেক্টরে ক্যারিয়ার সুযোগ বিস্তৃত হচ্ছে। ডিজাইন সেক্টরে আপনার পছন্দের যে . . ',
            subCategories: ["লোগো ডিজাইন", "প্রিন্ট ডিজাইন", "গ্রাফিক্স ডিজাইন", "মোশন গ্রাফিক্স"]
        },

        { name: "ডিজিটাল ", url: "/category/digital-marketing", description: 'প্রযুক্তি নির্ভরতা বৃদ্ধির সাথে সাথে ডিজাইন সেক্টরে ক্যারিয়ার সুযোগ বিস্তৃত হচ্ছে। ডিজাইন সেক্টরে আপনার পছন্দের . . ', subCategories: ["ডিজিটাল মার্কেটিং ১", "ডিজিটাল মার্কেটিং ২", "ডিজিটাল মার্কেটিং ৩"] },
        { name: " মার্কেটিং", url: "/category/digital-marketing", description: 'প্রযুক্তি নির্ভরতা বৃদ্ধির সাথে সাথে ডিজাইন সেক্টরে ক্যারিয়ার সুযোগ বিস্তৃত হচ্ছে। ডিজাইন সেক্টরে আপনার পছন্দের . . ', subCategories: ["ডিজিটাল মার্কেটিং ১", "ডিজিটাল মার্কেটিং ২", "ডিজিটাল মার্কেটিং ৩"] },
        { name: "টাল মার্কেটিং", url: "/category/digital-marketing", description: 'প্রযুক্তি নির্ভরতা বৃদ্ধির সাথে সাথে ডিজাইন সেক্টরে ক্যারিয়ার সুযোগ বিস্তৃত হচ্ছে। ডিজাইন সেক্টরে আপনার পছন্দের . . ', subCategories: ["ডিজিটাল মার্কেটিং ১", "ডিজিটাল মার্কেটিং ২", "ডিজিটাল মার্কেটিং ৩"] },

    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='row mx-auto'>
            <div className="courses-category col-md-8 my-2">
                <h3 className='fs-2'>সকল কোর্স</h3>
                <p className='fs-5 me-3'>
                    আমাদের প্রতিটি কোর্স এখানে ক্যাটেগরি ভিত্তিতে সাজানো
                    হয়েছে। আপনার পছন্দের ক্যাটেগরিতে ক্লিক করলে রিলেটেড কোর্স এক
                    নজরে দেখতে পাবেন।
                </p>

                <div className="d-flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                        <button className='category-btn' key={index} onClick={() => handleCategoryClick(course)}>
                            {course.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="col-md-4 my-2 ">
                <div className='courses-content'>
                    {selectedCategory ? (
                        <>
                            <h3 className='fs-2'>{selectedCategory?.name}</h3>
                            <p className='fs-6'>{selectedCategory?.description}</p>

                            {selectedCategory?.subCategories?.map((subCategory, index) => (
                                <Link key={index} to={`${studentData == null || studentData.status == 401 ? '' : '/user-db'}${selectedCategory?.url}/${encodeURIComponent(subCategory)}`} className='p-0 '>

                                    <div className="order_details">
                                        <div className="detail">
                                            <div className="detail-cap rounded">
                                                <img src="https://api.brightskills.com/course/MS PowerPoint Advanced Course/558-X-364_Course-Banner_2-of-MS-PowerPoint-Advanced-Course.jpg" alt="" height="100%" />
                                            </div>
                                        </div>
                                        <div className="order_details_description border-0">
                                            <div className="data">
                                                <h3>MS PowerPoint Advanced Course</h3>
                                                <p>Tirthendu Halder Rana</p>
                                            </div>
                                            <div className="order_details_price">
                                                <p>১১৯৯ টাকা</p>
                                            </div>
                                        </div>
                                    </div>



                                </Link>
                            ))}

                        </>
                    ) : 'No Content'}
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
