import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { callApi } from '../../utilities/functions';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import useLoggedIn from '../../hooks/useLoggedIn';
import { toast } from 'react-toastify';
import Loader from '../../utilities/Loader';

const Signup = () => {
  const { authenticated, loading } = useLoggedIn();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referel = urlParams.get('ref');

    setRef(referel)
  }, []);

  const defaultValue = {
    attachment_file: 'n/a',
    company_name: 'na',
    location: 'na',
    business_category: 'na',
    founder_gender: 'N/A',
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
        ) : <div className='row'>
          <div className='border col-md-6 mx-auto p-4 rounded row shadow'>

            <h1 className='fs-3 text-capitalize text-center text-success py-3'>SignUp for new students</h1>

            <Form className=''
              name="signup_form"
              onFinish={onFinish}
              layout='vertical'
            >
              <Form.Item
                className='mb-3'
                label=" Name"
                name="founder_name"
                rules={[{ required: true, message: 'Please enter  name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className='mb-3'
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
                className='mb-3'
                label=" Phone"
                name="founder_phone"
                rules={[{ required: true, message: 'Please enter  phone number!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item

                initialValue={ref}
                className='mb-3'
                label=" Referral "
                name="ref_code"

              >
                <Input disabled={ref} />
              </Form.Item>

              <Form.Item
                className='mb-3'
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please enter a password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                className='mb-3'>
                <Button disabled={loader} type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>

            <p>Already have an account? <Link to='/student/signin'>Login here</Link> </p>

          </div></div>

      }
    </>
  );
};

export default Signup;
