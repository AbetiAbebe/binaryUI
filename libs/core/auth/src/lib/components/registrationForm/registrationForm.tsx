import React, { useState } from 'react';
import styles from '../../core-auth.module.scss';
import { Button, Checkbox, Form, Input, notification, Select, Typography } from 'antd';
import { useRegisterMutation } from '../../services/auth';
import { getRegistrationError } from '../../state/registrationSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStatus } from '../../state/registrationSlice';

const { Title } = Typography;
const { Option } = Select;


export function RegistrationForm() {

  const [Register] = useRegisterMutation();
  // const error = useSelector(getRegistrationError);
  const [errMsg , setErrMsg] = useState('');
  const [succMsg , setSuccMsg] = useState('');

  const navigate = useNavigate();
  const status = useSelector(getStatus);
  const message = useSelector(getRegistrationError);

  const onFinish =  async (values: any) => {
    console.log('Success:', values);
    const { firstName, lastName , userName, password, confirmPassword, gender, email } = values;
    try {
      const userData: any = await Register({firstName, lastName ,userName, password, confirmPassword, gender, email });
      console.log('Const:', userData);

      if(userData?.data.data.Succeeded){
        // openNotification('Success' ,userData.data.data.message.toString());

      }else{
        console.log('Const Error:', userData.error.data.Message);
        openNotification( 'Error', userData.error.data.Message);
        navigate('/result');
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
        // notification.close();
      },
      placement : 'top'
    });
  };

  return (
    <div className={styles['login-form']}>
      <Title level={3} className={styles['login-title']}>
        Register
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
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your FirstName!' }]}
        >
          <Input className={styles['user-form-box']} />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your Last Name!' }]}
        >
          <Input className={styles['user-form-box']} />
        </Form.Item>

        <Form.Item
          label="User Name"
          name="userName"
          rules={[{ required: true, message: 'Please input your User Name!' }]}
        >
          <Input className={styles['user-form-box']} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ type: 'email', required: true, message: 'Please input your Email!' }]}
        >
          <Input className={styles['user-form-box']} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please select gender!' }]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          hasFeedback
        >
          <Input.Password className={styles['user-form-box']} />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password className={styles['user-form-box']} />
        </Form.Item>

        <Form.Item
          className={styles['user-submit-container']}
          style={{ width: '0' }}
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button
            className={styles['user-submit-btn']}
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegistrationForm;
