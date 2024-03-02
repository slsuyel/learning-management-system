import React, { useState, useEffect } from 'react';
import { Button, Card, Collapse } from 'antd';

const { Panel } = Collapse;

const CourseCurriculum = ({ selectedCourses }) => {
    const [selectedVideo, setSelectedVideo] = useState('');

    console.log(selectedCourses);


    useEffect(() => {

    }, [selectedVideo]);

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    return (
        <div className="mb-3">
            <h2 className="mb-4">Modules</h2>
            <div className="row w-100 mx-auto">
                <div className="col-md-12">
                    <Card>
                        <Collapse accordion>
                            {selectedCourses && selectedCourses.length > 0 ? (
                                selectedCourses.map((course, index) => (
                                    <Panel header={course.module_name} key={index}>
                                        {course.videos.map((video, videoIndex) => (
                                            <Button key={videoIndex} onClick={() => handleVideoClick(video.video_url)} className='text-start w-100 my-1'>
                                                <div className='d-flex fs-6 justify-content-between'>
                                                    <span><i className="fa-solid fa-circle-check text-success"></i></span> <span>{video.video_name}</span>
                                                    <span className='my-auto text-cyan text-sm'>{video.duration || '২ মিনিট ৪২ সেকেন্ড'}</span>
                                                </div>
                                            </Button>
                                        ))}
                                    </Panel>
                                ))
                            ) : (
                                <p className='p-5'>No Module Release</p>
                            )}
                        </Collapse>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CourseCurriculum;
