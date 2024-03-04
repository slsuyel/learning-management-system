import { Button, Card } from 'antd';
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import VideoPlayer from '../VideoPlayer';
import { useParams } from 'react-router-dom';

const MyCourses = () => {
    // const { courseId } = useParams()

    const [selectedVideo, setSelectedVideo] = useState({});



    const courseData =
    {
        "id": "6d85da9f-1adf-4d81-82ef-53296c3188dd",
        "course_name": "Web Development with Nishad",
        "course_category_id": "28a1066f-1882-404e-9b3c-e33a506adaca",
        "created_at": "2024-03-01T05:32:22.000000Z",
        "updated_at": "2024-03-01T05:32:22.000000Z",
        "category": null,
        "modules": [
            {
                "id": "dc0b1cd7-fce0-4114-9883-e03d721c488d",
                "module_name": "Module no 1",
                "course_id": "6d85da9f-1adf-4d81-82ef-53296c3188dd",
                "created_at": "2024-03-01T05:34:22.000000Z",
                "updated_at": "2024-03-01T05:34:22.000000Z",
                "videos": [
                    {
                        "id": "1745638f-e764-4580-8d9e-41e9d63a0c9b",
                        "video_name": "Video 1",
                        "course_module_id": "dc0b1cd7-fce0-4114-9883-e03d721c488d",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:35:22.000000Z",
                        "updated_at": "2024-03-01T05:35:22.000000Z"
                    },
                    {
                        "id": "de5c3dde-eeb1-4cf7-8023-f8abd3cfccac",
                        "video_name": "Video 2",
                        "course_module_id": "dc0b1cd7-fce0-4114-9883-e03d721c488d",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:35:26.000000Z",
                        "updated_at": "2024-03-01T05:35:26.000000Z"
                    },
                    {
                        "id": "4c533705-2fa0-499b-90e9-f08bce073b8d",
                        "video_name": "Video 3",
                        "course_module_id": "dc0b1cd7-fce0-4114-9883-e03d721c488d",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:35:30.000000Z",
                        "updated_at": "2024-03-01T05:35:30.000000Z"
                    },
                    {
                        "id": "61fd77d8-a20e-4f5c-a37c-0e08b3e7193a",
                        "video_name": "Video 4",
                        "course_module_id": "dc0b1cd7-fce0-4114-9883-e03d721c488d",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:35:34.000000Z",
                        "updated_at": "2024-03-01T05:35:34.000000Z"
                    }
                ]
            },
            {
                "id": "269a3548-da05-481f-8597-1bd0210a09d4",
                "module_name": "Module no 2",
                "course_id": "6d85da9f-1adf-4d81-82ef-53296c3188dd",
                "created_at": "2024-03-01T05:34:25.000000Z",
                "updated_at": "2024-03-01T05:34:25.000000Z",
                "videos": [
                    {
                        "id": "23a7a586-56d9-466b-a9bf-a66af3744424",
                        "video_name": "Video 1",
                        "course_module_id": "269a3548-da05-481f-8597-1bd0210a09d4",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:35:46.000000Z",
                        "updated_at": "2024-03-01T05:35:46.000000Z"
                    },
                    {
                        "id": "00037384-a0aa-49bb-9f7a-28817375c618",
                        "video_name": "Video 2",
                        "course_module_id": "269a3548-da05-481f-8597-1bd0210a09d4",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:35:50.000000Z",
                        "updated_at": "2024-03-01T05:35:50.000000Z"
                    },
                    {
                        "id": "dc7b7f61-06e7-4043-873a-43eae7ae249e",
                        "video_name": "Video 3",
                        "course_module_id": "269a3548-da05-481f-8597-1bd0210a09d4",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:35:53.000000Z",
                        "updated_at": "2024-03-01T05:35:53.000000Z"
                    },
                    {
                        "id": "73b3baed-da4d-4610-9400-3603c1130059",
                        "video_name": "Video 4",
                        "course_module_id": "269a3548-da05-481f-8597-1bd0210a09d4",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:35:56.000000Z",
                        "updated_at": "2024-03-01T05:35:56.000000Z"
                    },
                    {
                        "id": "79ddf4b1-5d43-4273-abd5-0af3710c745a",
                        "video_name": "Video 5",
                        "course_module_id": "269a3548-da05-481f-8597-1bd0210a09d4",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:36:00.000000Z",
                        "updated_at": "2024-03-01T05:36:00.000000Z"
                    },
                    {
                        "id": "0b693a07-0e37-4c6d-8ddf-863a16bc36d0",
                        "video_name": "Video 6",
                        "course_module_id": "269a3548-da05-481f-8597-1bd0210a09d4",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:36:03.000000Z",
                        "updated_at": "2024-03-01T05:36:03.000000Z"
                    },
                    {
                        "id": "c1bf0d2e-197c-4595-bf74-aef3d988f7d2",
                        "video_name": "Video 7",
                        "course_module_id": "269a3548-da05-481f-8597-1bd0210a09d4",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:36:08.000000Z",
                        "updated_at": "2024-03-01T05:36:08.000000Z"
                    }
                ]
            },
            {
                "id": "d3f24d6a-c3c9-485e-834f-1e7cc4abeb27",
                "module_name": "Module no 3",
                "course_id": "6d85da9f-1adf-4d81-82ef-53296c3188dd",
                "created_at": "2024-03-01T05:34:29.000000Z",
                "updated_at": "2024-03-01T05:34:29.000000Z",
                "videos": [
                    {
                        "id": "db5d272b-382a-44ad-9415-90275ad12e59",
                        "video_name": "Video 1",
                        "course_module_id": "d3f24d6a-c3c9-485e-834f-1e7cc4abeb27",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:36:23.000000Z",
                        "updated_at": "2024-03-01T05:36:23.000000Z"
                    },
                    {
                        "id": "2d063e27-5014-4c2d-b63d-eb3323ffa3a1",
                        "video_name": "Video 2",
                        "course_module_id": "d3f24d6a-c3c9-485e-834f-1e7cc4abeb27",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:36:27.000000Z",
                        "updated_at": "2024-03-01T05:36:27.000000Z"
                    },
                    {
                        "id": "0218f478-62db-4bce-b385-152441e164df",
                        "video_name": "Video 3",
                        "course_module_id": "d3f24d6a-c3c9-485e-834f-1e7cc4abeb27",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:36:30.000000Z",
                        "updated_at": "2024-03-01T05:36:30.000000Z"
                    },
                    {
                        "id": "3ed7a17b-a328-4a68-8f93-58a4ce65f496",
                        "video_name": "Video 4",
                        "course_module_id": "d3f24d6a-c3c9-485e-834f-1e7cc4abeb27",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:36:33.000000Z",
                        "updated_at": "2024-03-01T05:36:33.000000Z"
                    },
                    {
                        "id": "9d97352e-2f38-491c-8e8e-ae3b1bd900f0",
                        "video_name": "Video 5",
                        "course_module_id": "d3f24d6a-c3c9-485e-834f-1e7cc4abeb27",
                        "video_url": "https://exmple.com",
                        "created_at": "2024-03-01T05:36:36.000000Z",
                        "updated_at": "2024-03-01T05:36:36.000000Z"
                    }
                ]
            },
            {
                "id": "c56bd099-0f79-4afe-8bd2-7c0f806f6c1e",
                "module_name": "Module no 4",
                "course_id": "6d85da9f-1adf-4d81-82ef-53296c3188dd",
                "created_at": "2024-03-01T14:07:47.000000Z",
                "updated_at": "2024-03-01T14:07:47.000000Z",
                "videos": []
            }
            ,
            {
                "id": "c56bd099-0f79-4afe-8bd2-7c0f806f6c1e",
                "module_name": "Module no 5",
                "course_id": "6d85da9f-1adf-4d81-82ef-53296c3188dd",
                "created_at": "2024-03-01T14:07:47.000000Z",
                "updated_at": "2024-03-01T14:07:47.000000Z",
                "videos": []
            }
        ],
        "students": []
    }


    const handleVideoClick = (video,) => {
        setSelectedVideo(video);

    };
    // console.log(selectedVideo);

    return (
        <div className="mb-3">
            <div className="row w-100 mx-auto">
                <div className="col-md-7">
                    <VideoPlayer video={selectedVideo} />
                </div>
                <div className="col-md-5">
                    <Card>
                        <Accordion style={{ height: '100vh' }}>
                            <h3 className='border-bottom border-primary-subtle mb-4 pb-1 text-primary'> লেসন</h3>
                            {courseData.modules.map((module, index) => (
                                <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header>
                                        <div className='d-flex fw-bold justify-content-around w-100'>
                                            <span> {module.module_name}</span>
                                            <span> {module.videos.length} টি ভিডিও</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body className='py-1'>
                                        <table className='w-100'>
                                            {module.videos.map((video, videoIndex) => (
                                                <tr key={videoIndex} className='border-0'>
                                                    <th className='border-0' >
                                                        <Button onClick={() => handleVideoClick(video)} className='text-start w-100 my-1'>
                                                            <div className='d-flex fs-6 justify-content-between'>
                                                                <span><i className="fa-solid fa-circle-check text-success"></i></span> <span>{video.video_name}</span>
                                                                <span className='my
                                                                -auto text-cyan text-sm'>2 minute</span>
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

export default MyCourses;
