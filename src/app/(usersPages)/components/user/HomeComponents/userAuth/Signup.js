import React from 'react'
import { Button, Input, Form, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
export default function Signup({toggleForm}) {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }
  return (
    <div className="p-6">
      <Form name="signup" onFinish={onFinish} className="signup-form">
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Username"
            size="large"
            className="rounded-md"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Email"
            size="large"
            className="rounded-md"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            size="large"
            className="rounded-md"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full rounded-md"
          >
            Sign up
          </Button>
        </Form.Item>
        <Typography.Paragraph className="text-center">
          Already have an account?{' '}
          <Button type="link" onClick={toggleForm}>
            Login
          </Button>
        </Typography.Paragraph>
      </Form>
    </div>
  )
}
