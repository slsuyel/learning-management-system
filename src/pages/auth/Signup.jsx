import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { callApi } from '../../utilities/functions';
import { useNavigate } from 'react-router-dom';
import useLoggedIn from '../../hooks/useLoggedIn';
import { toast } from 'react-toastify';
import Loader from '../../utilities/Loader';

const Signup = () => {

  const { authenticated, loading } = useLoggedIn();
  const navigate = useNavigate();


  const [loader, setLoader] = useState(false);

  const defaultValue = {
    attachment_file: 'n/a',
    company_name: 'na',
    location: 'na',
    business_category: 'na',
    founder_gender: 'na',
  }

  if (loading) {
    return <Loader />
  }



  const onFinish = async (values) => {
    setLoader(true);
    try {
      const res = await callApi('Post', '/api/students', { ...defaultValue, ...values });
      console.log('API call response:', res);
      if (res.founder_name) {
        toast.success('Signup successfully!', {
          position: toast.POSITION.TOP_RIGHT
        });
        navigate('/student/signin')
      }


    } catch (error) {
      console.error('Error occurred during API call:', error);
    } finally {
      setLoader(false);
    }
  };



  return (
    <>
      {
        authenticated ? (
          navigate('/user-db', { replace: true })
        ) : <>
          <div className='row mx-auto'>
            <Form className='col-md-6 mx-auto'
              name="signup_form"
              onFinish={onFinish}
            >
              <Form.Item
                label=" Name"
                name="founder_name"
                rules={[{ required: true, message: 'Please enter  name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label=" Email"
                name="founder_email"
                rules={[
                  { required: true, message: 'Please enter  email!' },
                  { type: 'email', message: 'Please enter a valid email address!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label=" Phone"
                name="founder_phone"
                rules={[{ required: true, message: 'Please enter  phone number!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter a password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button disabled={loader} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div></>

      }
    </>
  );
};

export default Signup;
