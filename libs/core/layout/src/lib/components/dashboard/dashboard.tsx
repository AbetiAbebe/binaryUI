import React from 'react'
import { Avatar, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, InputNumber } from 'antd';
import { Image } from 'antd';

export function Dashboard () {

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  };


  return (
    <div style={{ margin : '40px' }} >
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col  className="gutter-row" span={6}>
      <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        </Col>
      <Col  className="gutter-row" span={18}>
        <div>
          <Form layout='inline' wrapperCol={{ span: 16 }} name="nest-messages">
            <Form.Item name={['user', 'Full Name']} label="Full Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
              <InputNumber />
            </Form.Item>

        </Form>
        </div>
      </Col>
    </Row>

    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col  className="gutter-row" span={6}>
        </Col>
      <Col  className="gutter-row" span={18}>
        <div>
          <Form layout='inline'  name="nest-messages">
            <Form.Item name={['user', 'Full Name']} label="Full Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
              <InputNumber />
            </Form.Item>
        </Form>
        </div>
      </Col>
    </Row>
    </div>

  )
}
export default Dashboard;
