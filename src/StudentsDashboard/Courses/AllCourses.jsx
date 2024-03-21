import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/StuDashboard.css';
import useCategoryData from '../../hooks/useCategoryData';
import useAllCourses from '../../hooks/useAllCourses';
import Loader from '../../utilities/Loader';
import useStudent from '../../hooks/useStudent';

const AllCourses = () => {
    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)


    const { coursesData, isLoading: coursesLoading } = useAllCourses();
    const { categories, isLoading: categoryLoading } = useCategoryData();
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);




    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    if (isLoading || categoryLoading || coursesLoading) {
        return <Loader />
    }



    return (
        <div className='row mx-auto container'>
            <div className="courses-category col-md-12 my-2 ">

                <h3 className='fs-2 font-bd'>সকল কোর্স</h3>
                <p className='fs-5 me-3 font-bd'>
                    আমাদের প্রতিটি কোর্স এখানে ক্যাটেগরি ভিত্তিতে সাজানো
                    হয়েছে। আপনার পছন্দের ক্যাটেগরিতে ক্লিক করলে রিলেটেড কোর্স এক
                    নজরে দেখতে পাবেন।
                </p>
                <div className="d-flex flex-wrap gap-2">
                    {categories.map((category, index) => (
                        <button className='category-btn' key={index} onClick={() => handleCategoryClick(category)}>
                            {category.category_name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="col-md-8 my-2 mx-auto">

                <div className='courses-content'>
                    {selectedCategory &&
                        coursesData &&
                        coursesData.map(course => (
                            course.course_category_id === selectedCategory.id && (
                                <Link to={studentData.status == 401 ? `/courses-details/${course.id}` : `/user-db/courses-details/${course.id}`} key={course.id} className='p-0 '>

                                    <div className="order_details py-3">
                                        <div className="detail">
                                            <div className="detail-cap rounded">
                                                <img src="https://www.talentlms.com/old/wp-content/uploads/2018/09/important-elements-of-online-learning-courses.jpg" alt="" height="100%" />
                                            </div>
                                        </div>
                                        <div className="order_details_description border-0">
                                            <div className="data">
                                                <h3 className='fs-2 mb-0'>{course.course_name}</h3>
                                                <p className='fs-4 m-0 p-0'>{course.instructor || "instructor"}</p>
                                            </div>
                                            <div className="order_details_price bg-success-subtle fs-5 mb-0 p-2 rounded-4 text-danger font-bd">
                                                <p>{course.price || 0} টাকা</p>
                                            </div>
                                        </div>
                                    </div>

                                </Link>
                            )
                        ))
                    }
                    {!selectedCategory && <p>No category selected</p>}
                    {selectedCategory && !coursesData && <p>Loading...</p>}
                </div>
            </div>
        </div>
    );
};

export default AllCourses;
