import React, { useState } from 'react';
import styles from '../../core-auth.module.scss';
import { Button, Checkbox, Form, Input, notification, Typography, Anchor } from 'antd';
import { useLoginMutation } from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { createSelectorHook, useSelector } from 'react-redux';
import { getLoginError } from '../../state/authSlice';
import { Link } from '@chakra-ui/react';

const { Title } = Typography;
// const { Link } = Anchor;

export function LoginForm() {

  const [login] = useLoginMutation();

  const error = useSelector(getLoginError);

  const [errMsg , setErrMsg] = useState('');
  const [succMsg , setSuccMsg] = useState('');

  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    const { userName , password } = values;

    try {
      const userData: any = await login({userName , password});

      if(userData?.data.data){
        console.log('Success:', userData);
        openNotification('Success' ,userData.data.data.message);
        // openNotification()
        navigate('/dashboard/home');
      }else{
        console.log('Error:', error);

        openNotification( 'Error', error);

      }

    } catch (err : any) {
      if(!err?.response){
        setErrMsg('No Server Response');
      }else if(err?.status === 400){
        setErrMsg('Missing Username + Password');
      }else if(err.data.Message){
        setErrMsg('Error: {err.data.Message}');
      }else{
        setErrMsg('Login Failed!');
      }
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const openNotification = ( header: string, details: string) => {
    notification.open({
      message: header,
      description: details,
      onClick: () => {
        // console.log('Notification Clicked!');
      },
      placement : 'top'
    });
  };

  return (
    <div className={styles['login-form']}>
      <Title level={3} className={styles['login-title']}>
        Login here
      </Title>
      <Form
        style={{ width: '100%' }}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          // style={{ width: '100%' }}
          label="Username"
          name="userName"
          rules={[{ required: true, message: 'Please input your Username/ Email!' }]}
        >
          <Input className={styles['user-form-box']} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className={styles['user-form-box']} />
        </Form.Item>

        <Form.Item
          className={styles['user-form-check']}
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          className={styles['user-submit-container']}
          // style={{ width: '0' }}
          wrapperCol={{ offset: 5, span: 16 }}
        >
          <button
            className={styles['user-submit-btn']}
            
            type="submit"
          >
            Login
          </button>
          <div className={styles['create-acc-container']}>
            <p>Don't have an accout</p>
            <Link className={styles['user-submit-link']} onClick={()=> {
              navigate('/register');
            }} 
            title="">
              click here
            </Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
