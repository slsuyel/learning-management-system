import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import useCategoryData from '../../hooks/useCategoryData';
import ReactQuill from 'react-quill';
import { callApi } from '../../utilities/functions';

const { Option } = Select;

const CreateCourse = () => {
    const { categories, refetch, isLoading, isError } = useCategoryData();
    const [aboutVideo, setAboutVideo] = useState('');
    const [targeted_audience, setTargeted_audience] = useState('');
    const [whatUlearn, setWhatUlearn] = useState('');
    const [descriptions, setDescriptions] = useState('');
    const [requirements, setRequirements] = useState('');
    const [features, setFeatures] = useState('');
    const [loader, setLoader] = useState(false);


    const onFinish = (values) => {
        //console.log('Form values:', values);
    };

    const handleSubmit = async (values) => {
        setLoader(true)
        //console.log('Form values:', values);
        onFinish(values);
        const res = await callApi('Post', "/api/courses", values);
        console.log(res);
        setLoader(false)
    };



    const modules = {
        toolbar: [
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };

    return (
        <Form
            name="courseForm"
            onFinish={handleSubmit}
            layout="vertical"
            initialValues={{
                course_name: '',
                instructor: '',
                rating: 0,
                course_category_id: '',
                previousPrice: 0,
                discount: 0,
                about_video: aboutVideo,
                targeted_audience: targeted_audience,
                whatUlearn: whatUlearn,
                descriptions: descriptions,
                requirements: requirements,
                features: features
            }}
        >
            <div className='row mx-auto mt-5'>

                <Form.Item
                    label="Course Name"
                    name="course_name"
                    rules={[{ required: true, message: 'Please Add the course name!' }]}
                    className='col-md-4'
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="course_category_id"
                    rules={[{ required: true, message: 'Please select the category!' }]}
                    className='col-md-4'
                >
                    <Select>
                        {
                            categories.map((ct) => <Option key={ct.id} value={ct.id}>{ct.category_name}</Option>)
                        }
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Instructor"
                    name="instructor"
                    rules={[{ required: true, message: 'Please input the instructor!' }]}
                    className='col-md-4'
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Rating"
                    name="rating"
                    rules={[{ required: true, message: 'Please input the rating!', type: 'number', min: 0, max: 5 }]}
                    className='col-md-4'
                >
                    <InputNumber className='w-100' />
                </Form.Item>



                {/* <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input the price!', type: 'number', min: 0 }]}
                    className='col-md-4'
                >
                    <InputNumber className='w-100' />
                </Form.Item> */}

                <Form.Item
                    label="Price"
                    name="previousPrice"
                    rules={[{ required: true, message: 'Please input the previous price!', type: 'number', min: 0 }]}
                    className='col-md-4'
                >
                    <InputNumber className='w-100' />
                </Form.Item>

                <Form.Item
                    label="Discount (%)"
                    name="discount"
                    rules={[{ required: true, message: 'Please input the discount!', type: 'number', min: 0, max: 100 }]}
                    className='col-md-4'
                >
                    <InputNumber className='w-100' />
                </Form.Item>






                <Form.Item
                    label="About Video"
                    name="about_video"
                    className='col-md-6'
                >
                    <ReactQuill modules={modules} style={{ height: '200px', paddingBottom: '61px' }} theme="snow" value={aboutVideo} onChange={setAboutVideo} />
                </Form.Item>

                <Form.Item
                    label="Targeted Audience"
                    name="targeted_audience"
                    className='col-md-6'
                >
                    <ReactQuill modules={modules} style={{ height: '200px', paddingBottom: '61px' }} theme="snow" value={targeted_audience} onChange={setTargeted_audience} />
                </Form.Item>

                <Form.Item
                    label="Descriptions"
                    name="descriptions"
                    className='col-md-6'
                >
                    <ReactQuill modules={modules} style={{ height: '200px', paddingBottom: '61px' }} theme="snow" value={descriptions} onChange={setDescriptions} />
                </Form.Item>

                <Form.Item
                    label="Requirements"
                    name="requirements"
                    className='col-md-6'
                >
                    <ReactQuill modules={modules} style={{ height: '200px', paddingBottom: '61px' }} theme="snow" value={requirements} onChange={setRequirements} />
                </Form.Item>






                <Form.Item
                    label="What You Learn"
                    name="whatYouLearn"
                    className='col-md-6'
                >
                    <ReactQuill modules={modules} style={{ height: '200px', paddingBottom: '61px' }} theme="snow" value={whatUlearn} onChange={setWhatUlearn} />
                </Form.Item>

                <Form.Item
                    label="Features"
                    name="features"
                    className='col-md-6'
                >
                    <ReactQuill modules={modules} style={{ height: '200px', paddingBottom: '61px' }} theme="snow" value={features} onChange={setFeatures} />
                </Form.Item>

                <Form.Item className='col-md-4'>
                    <Button disabled={loader} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </div>
        </Form>

    );
};

export default CreateCourse;
