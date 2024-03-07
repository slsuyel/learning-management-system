import { Button, Card } from 'antd';
import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import VideoPlayer from '../VideoPlayer';
import { callApi } from '../../../utilities/functions';
import { useParams } from 'react-router-dom';
import Loader from '../../../utilities/Loader';

const MyCourses = () => {
    const [selectedVideo, setSelectedVideo] = useState({});
    const [loader, setLoader] = useState(false)

    const { courseId } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        setLoader(true)
        const fetchData = async () => {
            try {
                const res = await callApi('get', `/api/courses/${courseId}`);
                setData(res.data)
                setLoader(false)
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoader(false)
            }
        };

        fetchData();
    }, [courseId]);



    const handleVideoClick = (video,) => {
        setSelectedVideo(video);

    };

    return (
        <div className="">

            {
                loader ? <Loader /> : <div className="row w-100 mx-auto">
                    <div className="col-md-7">
                        <VideoPlayer video={selectedVideo} />
                    </div>
                    <div className="col-md-5">
                        <Card>
                            <Accordion style={{ height: '100vh' }}>
                                <h3 className='border-bottom border-primary-subtle mb-4 pb-1 text-primary'> লেসন</h3>
                                {data?.modules?.map((module, index) => (
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
                                                                -auto text-cyan text-sm'></span>
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
            }
        </div>
    );


};

export default MyCourses;
