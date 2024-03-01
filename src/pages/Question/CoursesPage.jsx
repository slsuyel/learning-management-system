import React, { useState } from 'react';
import useAllCourses from '../../hooks/useAllCourses';
import { Button, Modal } from 'antd';
import { Dropdown } from 'react-bootstrap';
import CourseCurriculum from '../../StudentsDashboard/CourseCurriculum';
import Loader from '../../utilities/Loader';

const CoursesPage = () => {
    const [selectedCourses, setSelectedCourses] = useState(null);
    const { coursesData, isLoading } = useAllCourses()

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

        setSelectedCourses(data)
    };



    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <h1>Course List</h1>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>

                            <th>Modules</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Discount</th>
                            {/* <th className='hidden-on-mobile'>Outcomes</th>
                            <th className='hidden-on-mobile'>Requirements</th>
                            <th className='hidden-on-mobile'>Audience</th>
                            <th className='hidden-on-mobile'>Rating</th> */}
                            <th className=''>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesData.map(course => (



                            <tr key={course.id}>
                                <td>{course.course_name}</td>
                                <td>Category</td>
                                <td>
                                    <Button onClick={() => handleCurriculm(course.modules)}>View Modules</Button>
                                </td>


                                <td>Instructor</td>
                                <td>Price</td>
                                <td>Discount</td>



                                <td><Dropdown>
                                    <Dropdown.Toggle variant="secondary" id={`dropdownMenuButton${course.id}`}>
                                        Action
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>

                                        <button className="dropdown-item" onClick={() => handleEdit(course.id)}>Edit</button>

                                        <button className="dropdown-item" onClick={() => handleDelete(course.id)}>Delete</button>
                                    </Dropdown.Menu>
                                </Dropdown></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <CourseCurriculum selectedCourses={selectedCourses} />
            </Modal>



        </div >
    );
};

export default CoursesPage;