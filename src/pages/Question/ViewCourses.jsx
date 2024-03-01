import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CourseCurriculum from '../../StudentsDashboard/CourseCurriculum';

const ViewCourses = () => {
    const { id } = useParams();

    const coursesList = [
        {
            id: 45444,
            title: "গ্রাফিক্স ডিজাইন",
            instructor: "Dinar Minhaj",
            rating: 5,
            category: "Typography",
            price: 3000,
            previousPrice: 4000,
            discount: "২৫",
            targetedAudience: 'ডিজাইন সেক্টরে যদি ক্যারিয়ার ডেভেলপ করতে চান তাহলে এই কোর্সটি আপনার জন্যই। লোকাল মার্কেটে ক্যারিয়ার গড়তে পারবেন। এছাড়া আপনি যদি ইন্টারন্যাশনাল মার্কেটে সফল Freelancer হিসেবে ক্যারিয়ার ডেভেলপ করতে চান সেক্ষেত্রেও আমাদের এই কোর্সটি অনেক হেল্পফুল হবে।',
            outComes: [
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
            ],
            courseCurriculum: [
                {
                    title: "Introduction",
                    lessons: 1,
                    video: [
                        {
                            videoTitle: 'Introduction Video 1',
                            video: 'url1',
                        }],
                    unlock: true
                },
                {
                    title: "Introduction",
                    lessons: 5,
                    video: [
                        {
                            videoTitle: 'Introduction Video 1',
                            video: 'url1',
                        },
                        {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        },
                        {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        },
                        {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        },
                        {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        },
                    ],
                    unlock: true
                },
                {
                    title: "Introduction",
                    lessons: 2,
                    video: [
                        {
                            videoTitle: 'Introduction Video 1',
                            video: 'url1',
                        }, {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        }],
                    unlock: true
                },
            ]
        },
        {
            id: 454554544,
            title: "গ্রাফিক্স ডিজাইন",
            instructor: "Dinar Minhaj",
            rating: 5,
            category: "Typography",
            price: 3000,
            previousPrice: 4000,
            discount: "২৫",
            targetedAudiance: 'ডিজাইন সেক্টরে যদি ক্যারিয়ার ডেভেলপ করতে চান তাহলে এই কোর্সটি আপনার জন্যই। লোকাল মার্কেটে ক্যারিয়ার গড়তে পারবেন। এছাড়া আপনি যদি ইন্টারন্যাশনাল মার্কেটে সফল Freelancer হিসেবে ক্যারিয়ার ডেভেলপ করতে চান সেক্ষেত্রেও আমাদের এই কোর্সটি অনেক হেল্পফুল হবে।',
            outComes: [
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
            ],
            courseCurriculum: [
                {
                    title: "Introduction",
                    lessons: 1,
                    video: [
                        {
                            videoTitle: 'Introduction Video 1',
                            video: 'url1',
                        }],
                    unlock: true
                },
                {
                    title: "Introduction",
                    lessons: 5,
                    video: [
                        {
                            videoTitle: 'Introduction Video 1',
                            video: 'url1',
                        },
                        {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        },
                        {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        },
                        {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        },
                        {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        },
                    ],
                    unlock: true
                },
                {
                    title: "Introduction",
                    lessons: 2,
                    video: [
                        {
                            videoTitle: 'Introduction Video 1',
                            video: 'url1',
                        }, {
                            videoTitle: 'Introduction Video 2',
                            video: 'url2',
                        }],
                    unlock: true
                },
            ]
        },



    ]
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleEdit = (id) => {

        console.log(id);
    };


    const handleDelete = (id) => {
        // Handle delete action
        console.log(id);
    };
    const handleCurriculm = (data) => {
        setIsModalOpen(true);
        console.log(data);
    };

    return (
        <>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Discount</th>
                            <th>Curriculum</th>
                            <th className='hidden-on-mobile'>Outcomes</th>
                            <th className='hidden-on-mobile'>Requirements</th>
                            <th className='hidden-on-mobile'>Audience</th>
                            <th className='hidden-on-mobile'>Rating</th>
                            <th className=''>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesList.map(course => (
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{course.category}</td>
                                <td>{course.instructor}</td>
                                <td>{course.price}</td>
                                <td>{course.discount}</td>
                                <td>
                                    <Button onClick={() => handleCurriculm(course.courseCurriculum)}>View Curriculm</Button>
                                </td>
                                <td className='hidden-on-mobile'>
                                    <ul>
                                        {course.outComes.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className='hidden-on-mobile'>{course.requirements}</td>
                                <td className='hidden-on-mobile'>{course.targetedAudience}</td>
                                <td className='hidden-on-mobile'>{course.rating}</td>
                                <td><Dropdown>
                                    <Dropdown.Toggle variant="secondary" id={`dropdownMenuButton${course.id}`}>
                                        Action
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>

                                        <button className="dropdown-item" onClick={() => handleEdit(item.id)}>Edit</button>

                                        <button className="dropdown-item" onClick={() => handleDelete(item.id)}>Delete</button>
                                    </Dropdown.Menu>
                                </Dropdown></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <CourseCurriculum />
            </Modal>

        </>
    );

};

export default ViewCourses;