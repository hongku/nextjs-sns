import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Input, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ColorPalette from '../../styles/colors';
import UserProfile from '../UserProfile';
import LoginForm from '../LoginForm';
import * as Styled from './style';

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = (value: boolean) => () => {
    setIsLoggedIn(value);
  };

  return (
    <>
      <Styled.NavBarWrapper>
        <Styled.NavBar align="middle">
          <Col flex="300px">
            <Input
              placeholder="Search by keyword.."
              bordered={false}
              prefix={<SearchOutlined style={{ color: ColorPalette.GRAY_8F8E8E }} />}
            />
          </Col>
          <Col flex="auto">
            <Styled.NavMenu mode="horizontal">
              <Menu.Item>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/profile">
                  <a>PROFILE</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/signup">
                  <a>SIGN UP</a>
                </Link>
              </Menu.Item>
            </Styled.NavMenu>
          </Col>
        </Styled.NavBar>
      </Styled.NavBarWrapper>
      <Styled.Main>
        <Styled.ContentWrapper>
          <Styled.Content>{children}</Styled.Content>
          <Styled.SkyWrapper>
            {isLoggedIn ? (
              <UserProfile onLogout={handleLogin(false)} />
            ) : (
              <LoginForm onLogin={handleLogin(true)} />
            )}
          </Styled.SkyWrapper>
        </Styled.ContentWrapper>
      </Styled.Main>
    </>
  );
}

export default AppLayout;
