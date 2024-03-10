import React, { useEffect, useState } from 'react';
import { Select, Input, Button } from 'antd';
import useAllCourses from '../../../hooks/useAllCourses';
import { callApi } from '../../../utilities/functions';
const { Option } = Select;

const AddClass = () => {
    const { coursesData, isLoading } = useAllCourses();
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        course_module_id: '',
        video_name: '',
        // video_url: '',
        videoFile: null
    });

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    // console.log(formData);

    const handleSubmit = async () => {
        if (!formData.course_module_id || !formData.video_name || !formData.videoFile) {
            alert('Fill up all fields');
            return;
        }

        setLoading(true);

        const formDataForUpload = new FormData();
        formDataForUpload.append('course_module_id', formData.course_module_id);
        formDataForUpload.append('video_name', formData.video_name);
        formDataForUpload.append('videoFile', formData.videoFile);

        try {
            const res = await callApi('post', '/api/course/videos', formDataForUpload, {
                'Content-Type': 'multipart/form-data',
            });

            if (res.data.video_name) {
                alert('Success');
            }
        } catch (error) {
            console.error('Error uploading video:', error);
        } finally {
            setLoading(false);
        }
    };



    const handleChangeCourse = (value) => {
        setSelectedCourse(value);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await callApi('get', '/api/modules');
            setModules(res.data.data);
        };

        fetchData();
    }, []);



    return (
        <div className="container">
            <h1>Add Class</h1>
            <div className="row">
                <div className="col-md-6">
                    <Select
                        style={{ width: '100%', marginBottom: '20px' }}
                        placeholder="Select Course"
                        onChange={handleChangeCourse}
                        value={selectedCourse}
                    >
                        {coursesData.map((c) => (
                            <Option key={c.id} value={c.id}>
                                {c.course_name}
                            </Option>
                        ))}
                    </Select>
                    <Select
                        style={{ width: '100%', marginBottom: '20px' }}
                        placeholder="Select Module"
                        onChange={(value) => handleChange('course_module_id', value)} // Corrected key name
                    >
                        {modules
                            .filter((m) => m.course_id === selectedCourse)
                            .map((module) => (
                                <Option key={module.id} value={module.id}>
                                    {module.module_name}
                                </Option>
                            ))}
                    </Select>
                    <Input
                        required
                        style={{ marginBottom: '20px' }}
                        placeholder="Video Title"
                        onChange={(e) => handleChange('video_name', e.target.value)}
                    />
                    {/* <Input
                        required
                        style={{ marginBottom: '20px' }}
                        placeholder="Video Url"
                        onChange={(e) => handleChange('video_url', e.target.value)}
                    /> */}
                    <input
                        required
                        type="file"
                        style={{ marginBottom: '20px' }}
                        onChange={(e) => handleChange('videoFile', e.target.files[0])}
                    />
                    <Button type="primary" disabled={loading} onClick={handleSubmit}>Upload Video</Button>
                </div>
            </div>
        </div>
    );
};

export default AddClass;
