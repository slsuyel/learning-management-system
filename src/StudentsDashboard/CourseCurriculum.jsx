import React, { useState } from 'react';
import { Button, Card, Collapse } from 'antd';
import { Accordion } from 'react-bootstrap';

const { Panel } = Collapse;

const CourseCurriculum = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [courseData, setCourseData] = useState([
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
    ]);


    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    return (
        <div className="mb-3">
            <h2 className="mb-4">Course Curriculum</h2>
            <div className="row w-100 mx-auto">
                <div className="col-md-12">
                    <Card >
                        <Accordion style={{ height: '100vh' }}>
                            <h3 className='border-bottom border-primary-subtle mb-4 pb-1 text-primary'>   লেসন</h3>
                            {courseData.map((course, index) => (
                                <Accordion.Item eventKey={index} key={index}>

                                    <Accordion.Header>
                                        <div className='d-flex fw-bold justify-content-around w-100'>
                                            <span> {course.title}</span>
                                            <span> {course.video.length} টি ভিডিও</span>
                                        </div>

                                    </Accordion.Header>
                                    <Accordion.Body className='py-1'>
                                        <table className='w-100'>
                                            {course.video.map((video, videoIndex) => (
                                                <tr key={videoIndex} className='border-0'>
                                                    <th className='border-0' >
                                                        <Button onClick={() => handleVideoClick(video)} className='text-start w-100 my-1'>
                                                            <div className='d-flex fs-6 justify-content-between'>
                                                                <span><i className="fa-solid fa-circle-check text-success"></i></span> <span>{video.videoTitle}</span>
                                                                <span className='my-auto text-cyan text-sm'>{video.duration}</span>
                                                            </div>
                                                        </Button>
                                                    </th>
                                                </tr>
                                            ))}
                                        </table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Card>
                </div>

            </div>


        </div>
    );
};

export default CourseCurriculum;
