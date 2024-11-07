import React, { useState } from 'react'
import { Button, Input, Form, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import useAdminLogin from '@/app/(adminPages)/hooks/useAdminLogin';
import { useSelector } from 'react-redux';
export default function Login() {
  const { isLoading  } = useSelector((state) => state.loader);
  const {onFinish} = useAdminLogin();
  return (
    <div className="p-6">
      <Form name="login" onFinish={onFinish} className="login-form">
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
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-full rounded-md"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </Form.Item>
        {/* <Typography.Paragraph className="text-center">
          Don't have an account?{' '}
          <Button type="link" onClick={toggleForm}>
            Signup
          </Button>
        </Typography.Paragraph> */}
      </Form>
    </div>
  )
}
