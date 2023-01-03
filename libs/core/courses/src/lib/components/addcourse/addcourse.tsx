import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Space,
  Switch,
  Table,
} from 'antd';

const Addcourse = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      {' '}
      <h3>Add A New Course</h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Course Name"
          name="courseName"
          rules={[{ required: true, message: 'Please input course Name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Course Discription"
          name="courseDisc"
          rules={[{ required: true, message: 'Please input course Name!' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Set Price"
          name="price"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Course Duaration"
          name="duration"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Course Author"
          name="author"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Course
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Addcourse;