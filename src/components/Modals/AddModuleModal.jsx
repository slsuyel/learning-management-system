import { Form, Input, Modal } from 'antd';
import React from 'react';
import { callApi } from '../../utilities/functions';

const AddModuleModal = ({ addModule, setAddModule, course }) => {
    const [form] = Form.useForm();

    const course_id = course.id;

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const dataToSend = { ...values, course_id }; values
            const res = await callApi('Post', "/api/modules", dataToSend);
            console.log(res);
            setAddModule(false);
        } catch (errorInfo) {
            console.log('Validation failed:', errorInfo);
        }
    };


    const handleCancel = () => {
        setAddModule(false);
    };

    return (
        <Modal title="Basic Modal" open={addModule} onOk={handleOk} onCancel={handleCancel}>
            <Form form={form}>
                <Form.Item label="Module Name" name="module_name" rules={[{ required: true, message: 'Please input module name!' }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddModuleModal;
