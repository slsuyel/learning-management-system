import React, { useState } from 'react';
import { Select, Input, Button } from 'antd';


const { Option } = Select;

const AddClass = () => {
    const [formData, setFormData] = useState({
        course: '',
        module: '',
        videoTitle: '',
        videoFile: null
    });

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    const handleSubmit = () => {
        console.log(formData);
    };

    return (
        <div className="container">
            <h1>Add Class</h1>
            <div className="row">
                <div className="col-md-6">
                    <Select
                        style={{ width: '100%', marginBottom: '20px' }}
                        placeholder="Select Course"
                        onChange={(value) => handleChange('course', value)}
                    >
                        <Option value="course1">Course 1</Option>
                        <Option value="course2">Course 2</Option>
                        <Option value="course3">Course 3</Option>
                    </Select>
                    <Select
                        style={{ width: '100%', marginBottom: '20px' }}
                        placeholder="Select Module"
                        onChange={(value) => handleChange('module', value)}
                    >
                        <Option value="module1">Module 1</Option>
                        <Option value="module2">Module 2</Option>
                        <Option value="module3">Module 3</Option>
                    </Select>
                    <Input
                        style={{ marginBottom: '20px' }}
                        placeholder="Video Title"
                        onChange={(e) => handleChange('videoTitle', e.target.value)}
                    />
                    <input
                        type="file"
                        style={{ marginBottom: '20px' }}
                        onChange={(e) => handleChange('videoFile', e.target.files[0])}
                    />
                    <Button type="primary" onClick={handleSubmit}>Upload Video</Button>
                </div>
            </div>
        </div>
    );
};

export default AddClass;
