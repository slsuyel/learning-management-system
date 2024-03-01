import { Button, Progress } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const MyCoursesPage = () => {

    const data = {
        "id": "b118b78e-be1a-436b-b8b6-a13171e8082b",
        "course_name": "Wordpress Development  2",
        "course_category_id": "28a1066f-1882-404e-9b3c-e33a506adaca",
        "created_at": "2024-03-01T09:19:36.000000Z",
        "updated_at": "2024-03-01T09:19:36.000000Z",
        "category": null,
        "modules": [],
        "students": []
    }




    return (
        <div className="container">
            <h1 className="text-center mb-5 fs-1 fw-semibold text-secondary">Ready For Your Next Lesson?</h1>

            <div className="row ">
                <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                    <div className="card">
                        <div className="card-body bg-body-secondary rounded w-100">
                            <div className="row">
                                <div className="col-xs-12 col-sm-5 my-auto">
                                    <img className="img-fluid " src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1704289831068.jpg" alt="Next Level Web development" loading="lazy" />
                                </div>
                                <div className="col-xs-12 col-sm-7">
                                    <div className="fs-4 fw-bold text-custom">{data.course_name}</div>
                                    <div className="mentor">With Suyel Haque</div>
                                    <div className="d-flex flex-column align-items-start">
                                        <Progress percent={30} size="default" />
                                    </div>
                                    <div className="mt-3">

                                        <Link to={`/user-db/my-courses/${data.id}`}>
                                            <Button className="bg-gradient-navy me-2">
                                                Continue Course
                                            </Button>
                                        </Link>






                                        <Button>Outline</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCoursesPage;
