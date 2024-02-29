import React, { useState } from 'react';
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;

const CourseCurriculum = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const courseData = [
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
    ];

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    return (
        <div className="mb-3">
            <h2 className="mb-4">Course Curriculum</h2>
            <div className="row w-100 mx-auto">
                <div className="col-md-12">
                    <Collapse accordion>
                        {courseData.map((course, index) => (
                            <Panel
                                header={
                                    <div className='d-flex fw-bold gap-4 text-pink'>
                                        {course.title}
                                        <div>(<span>{course.lessons} </span>  lessons)</div>
                                    </div>
                                }
                                key={index.toString()}
                            >
                                <div className='table-responsive'>
                                    <table className="table">
                                        <tbody>
                                            {course.video.map((video, videoIndex) => (
                                                <tr key={videoIndex} className='border-0'>
                                                    <th scope="row" className='border-0' >
                                                        <Button className='text-start w-100'>
                                                            {video.videoTitle}
                                                        </Button>
                                                    </th>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Panel>
                        ))}
                    </Collapse>
                </div>

            </div>


        </div>
    );
};

export default CourseCurriculum;
