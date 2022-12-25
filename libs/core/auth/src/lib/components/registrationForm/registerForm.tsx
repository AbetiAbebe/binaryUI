import React from 'react';
import styles from '../../core-auth.module.scss';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

const { Title } = Typography;

export function RegsitrationForm() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['login-form']}>
      <Title level={3} className={styles['login-title']}>
        {' '}
        Register{' '}
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
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
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
          style={{ width: '0' }}
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button
            className={styles['user-submit-btn']}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default RegsitrationForm;
