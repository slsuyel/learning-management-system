import { Button, Progress } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { callApi } from './../../../utilities/functions';
import Loader from '../../../utilities/Loader';

const MyCoursesPage = () => {
    const id = localStorage.getItem("studentId")
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        const fetchData = async () => {
            try {
                const res = await callApi('Post', `/api/enrollmented/course/${id}`);
                setData(res)
                setLoader(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoader(false)
            }
        };

        fetchData();
    }, [id]);



    return (
        <div className="container">
            <h1 className="text-center mb-5 fs-1 fw-semibold text-secondary">Ready For Your Next Lesson?</h1>

            {
                loader ? <Loader /> : <div className="row">
                    {
                        data && data.map((d) =>
                            <div key={d.id} className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                                <div className="card">
                                    <div className="card-body bg-body-secondary rounded w-100">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-5 my-auto">
                                                <img className="img-fluid " src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1704289831068.jpg" alt="Next Level Web development" loading="lazy" />
                                            </div>
                                            <div className="col-xs-12 col-sm-7">
                                                <div className="fs-4 fw-bold text-custom">
                                                    {d?.course?.course_name}</div>
                                                <div className="mentor">With </div>
                                                <div className="d-flex flex-column align-items-start">
                                                    <Progress percent={30} size="default" />
                                                </div>
                                                <div className="mt-3">

                                                    <Link to={`/user-db/my-courses/${d?.course?.id}`}>
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

                        )
                    }

                </div>
            }
        </div>
    );
};

export default MyCoursesPage;
