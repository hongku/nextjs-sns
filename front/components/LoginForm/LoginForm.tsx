import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import * as Styled from './style';

type Props = {
  onLogin: () => void;
};

function LoginForm({ onLogin }: Props) {
  const handleSubmit = (values: any) => {
    console.log(values);
    onLogin();
  };

  return (
    <Styled.LoginFormWrapper>
      <Form onFinish={handleSubmit}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password' }]}
        >
          <Input type="password" prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </Styled.LoginFormWrapper>
  );
}

export default LoginForm;
