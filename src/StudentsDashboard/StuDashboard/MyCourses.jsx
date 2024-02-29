import { Button, Card } from 'antd';
import { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';

const MyCourses = () => {

    const [selectedVideo, setSelectedVideo] = useState({
        videoTitle: 'Introduction Video 1',
        video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761', duration: '২ মিনিট ৪২ সেকেন্ড'
    });

    const courseData = [
        {
            title: "কোর্স পরিচিতি",
            lessons: 1,
            video: [
                {
                    videoTitle: 'Introduction Video 1',
                    video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761', duration: '২ মিনিট ৪২ সেকেন্ড'
                }],
            unlock: true
        },
        {
            title: "Introduction",
            lessons: 5,
            video: [
                {
                    videoTitle: 'Introduction Video 1',
                    video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761',
                    duration: '২ মিনিট ৪২ সেকেন্ড'
                },
                {
                    videoTitle: 'Introduction Video 2',
                    video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761',
                    duration: '২ মিনিট ৪২ সেকেন্ড'
                },
                {
                    videoTitle: 'Introduction Video 2',
                    video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761',
                    duration: '২ মিনিট ৪২ সেকেন্ড'
                },
                {
                    videoTitle: 'Introduction Video 2',
                    video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761',
                    duration: '২ মিনিট ৪২ সেকেন্ড'
                },
                {
                    videoTitle: 'Introduction Video 2',
                    video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761',
                    duration: '২ মিনিট ৪২ সেকেন্ড'
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
                    video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761', duration: '২ মিনিট ৪২ সেকেন্ড'
                }, {
                    videoTitle: 'Introduction Video 2',
                    video: 'https://player.vimeo.com/external/392582053.sd.mp4?s=edeb26876814b33dc139fa14d5fde8b6bc49cdbb&profile_id=164&oauth2_token_id=57447761',
                }],
            unlock: true
        },
    ];

    const handleVideoClick = (video,) => {
        setSelectedVideo(video);

    };





    return (
        <div className="mb-3">

            <div className="row w-100 mx-auto">
                <div className="col-md-7">

                    <VideoPlayer video={selectedVideo} />



                </div>
                <div className="col-md-5">
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

export default MyCourses;
