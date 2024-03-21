import React, { useState } from 'react';
import { Form, Button, Input, message, Upload, Alert } from 'antd';
import { callApi } from '../utilities/functions';

import { UploadOutlined } from '@ant-design/icons';
import useStudent from '../hooks/useStudent';
import Loader from '../utilities/Loader';
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem("studentId")
    const { studentData, isLoading } = useStudent(id, `/api/students/profile`)
    const [loader, setLoader] = useState(false)


    if (isLoading) {
        return <Loader />
    }


    const onFinish = async (values) => {
        setLoader(true)
        const formData = new FormData();
        formData.append('founder_name', values.founder_name);
        formData.append('founder_phone', values.founder_phone);
        formData.append('founder_gender', values.founder_gender);


        if (values.attachment_file && values.attachment_file.fileList && values.attachment_file.fileList.length > 0) {
            formData.append('attachment_file', values.attachment_file.fileList[0].originFileObj);
        }

        try {
            const res = await callApi('post', `/api/students/update/${id}`, formData, {
                'Content-Type': 'multipart/form-data',
            });

            if (res.founder_name) {
                message.success('Profile updated successfully');
            }
            navigate(-1)
            console.log(res);
            setLoader(false)
        } catch (error) {
            console.error('Error:', error);
            setLoader(false)
        }
        setLoader(false)
    };

    const beforeUpload = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result);
        };
        return false;
    };



    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">

                    <div className="col-md-8 mx-auto">
                        <div className="card mb-3">
                            <div className="card-body">
                                <Form
                                    name="edit_profile"
                                    onFinish={onFinish}

                                    initialValues={{
                                        founder_name: studentData.founder_name || '',
                                        founder_phone: studentData.founder_phone || '',
                                        founder_gender: studentData.founder_gender || '',
                                        attachment_file: studentData.attachment_file || ""
                                    }}

                                >


                                    <label htmlFor="attachment_file">Profile Picture</label>
                                    <Form.Item

                                        name="attachment_file"
                                        rules={[{ required: false }]}
                                        className='text-center'
                                    >
                                        <Upload
                                            beforeUpload={beforeUpload}
                                            showUploadList={false}
                                        >
                                            {studentData.attachment_file && (
                                                <img src={studentData.attachment_file} alt="Attachment Preview" className='rounded-circle' style={{ maxWidth: '200px', cursor: 'crosshair' }} />
                                            )}
                                            {!studentData.attachment_file && (
                                                <Button icon={<UploadOutlined />}>Select File</Button>
                                            )}
                                        </Upload>
                                    </Form.Item>

                                    <Form.Item
                                        label="Name"
                                        name="founder_name"
                                        rules={[{ required: true, message: 'Please input your name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>



                                    <Form.Item
                                        label="Phone"
                                        name="founder_phone"
                                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Gender"
                                        name="founder_gender"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button disabled={loader} type="primary" htmlType="submit">
                                            {loader ? 'Pending' : ' Save'}
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
