import React from 'react';
import { Form, Button, Input, message } from 'antd';

const EditProfile = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        message.error('Features coming soon');
    };

    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
                                    <div className="mt-3">
                                        <h4>Edit Profile</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <Form
                                    name="edit_profile"
                                    onFinish={onFinish}
                                    initialValues={{
                                        founder_name: '', // Initialize with current values if needed
                                        founder_email: '',
                                        founder_phone: '',
                                        founder_gender: ''
                                    }}
                                >
                                    <Form.Item
                                        label="Name"
                                        name="founder_name"
                                        rules={[{ required: true, message: 'Please input your name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="founder_email"
                                        rules={[{ required: true, message: 'Please input your email!' }]}
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
                                        <Button type="primary" htmlType="submit">
                                            Save
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
