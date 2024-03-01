import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/StuDashboard.css';
import useCategoryData from '../../hooks/useCategoryData';
import useAllCourses from '../../hooks/useAllCourses';
import Loader from '../../utilities/Loader';

const AllCourses = () => {
    const { coursesData, isLoading: coursesLoading } = useAllCourses();
    const { categories, isLoading: categoryLoading } = useCategoryData();
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    if (categoryLoading || categoryLoading) {
        return <Loader />
    }



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
                    {categories.map((category, index) => (
                        <button className='category-btn' key={index} onClick={() => handleCategoryClick(category)}>
                            {category.category_name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="col-md-4 my-2 ">

                <div className='courses-content'>
                    {selectedCategory &&
                        coursesData &&
                        coursesData.map(course => (
                            course.course_category_id === selectedCategory.id && (
                                <Link to={`/user-db/payment/${course.id}`} key={course.id} className='p-0 '>

                                    {console.log(course)}

                                    <div className="order_details">
                                        <div className="detail">
                                            <div className="detail-cap rounded">
                                                <img src="https://api.brightskills.com/course/MS PowerPoint Advanced Course/558-X-364_Course-Banner_2-of-MS-PowerPoint-Advanced-Course.jpg" alt="" height="100%" />
                                            </div>
                                        </div>
                                        <div className="order_details_description border-0">
                                            <div className="data">
                                                <h3>{course.course_name}</h3>
                                                <p>Tirthendu Halder Rana</p>
                                            </div>
                                            <div className="order_details_price">
                                                <p>১১৯৯ টাকা</p>
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
