import React, { useState, useEffect } from 'react';
import { Button, Card, Collapse } from 'antd';

const { Panel } = Collapse;

const CourseCurriculum = ({ modules }) => {
    const [selectedVideo, setSelectedVideo] = useState('');

    console.log(modules);


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
                    <Card className='module-card'>
                        <Collapse accordion>
                            {modules && modules.length > 0 ? (
                                modules.map((module, index) => (
                                    <Panel header={module.module_name} key={index}>
                                        <span>{module.module_name} </span>

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
