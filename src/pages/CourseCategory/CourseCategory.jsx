import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import useCategoryData from '../../hooks/useCategoryData';
import { Dropdown } from 'react-bootstrap';
import { callApi } from '../../utilities/functions';

const CreateCategoryModal = ({ visible, onCancel, setLoading, refetchCategories }) => {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        //console.log(values);
        try {
            setLoading(true);
            const res = await callApi('POST', "/api/courses/categories", values);
            form.resetFields();
            setLoading(false);
            refetchCategories();
            onCancel(); // Close the modal after successful submission
        } catch (error) {
            console.error("Error occurred:", error);
            setLoading(false);
        }
    };

    return (
        <Modal
            visible={visible}
            title="Create Category"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onFinish(values);
                    })
                    .catch((info) => {
                        //console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form form={form} layout="vertical" name="create_category_form">
                <Form.Item
                    name="category_name"
                    label="Category Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter the category name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const CourseCategory = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { categories, refetch, isLoading, isError } = useCategoryData();

    if (isError) {
        return <div>Error fetching categories</div>;
    }

    const handleCreate = (values) => {
        //console.log('Creating category:', values);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleEdit = (categoryId) => {
        // Implement the edit functionality here
        //console.log('Editing category:', categoryId);
    };

    const handleDelete = async (categoryId) => {
        const res = await callApi("Delete", `/api/courses/categories/${categoryId}`)
        //console.log(res);
        refetch()
    };
    // console.log(categories);
    return (
        <div className='col-md-10 mx-auto'>
            <div className='align-items-center d-flex justify-content-between my-4'>
                <h2>Course Categories</h2>
                <Button type="primary" onClick={() => setIsModalVisible(true)} loading={loading}>
                    Create Category
                </Button>
            </div>

            <CreateCategoryModal
                visible={isModalVisible}
                onCreate={handleCreate}
                onCancel={handleCancel}
                setLoading={setLoading}
                refetchCategories={refetch}
            />




            <div className='table-responsive'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading || loading ? (
                            <tr>
                                <td colSpan="3">Loading...</td>
                            </tr>
                        ) : (
                            categories.map((category, index) => (
                                <tr key={category.id}>
                                    <td>{index + 1}</td>
                                    <td>{category.category_name}</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id={`dropdownMenuButton${category.id}`}>
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <button className="dropdown-item" onClick={() => handleEdit(category.id)}>Edit</button>
                                                <button className="dropdown-item" onClick={() => handleDelete(category.id)}>Delete</button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CourseCategory;