import React from 'react';
import Link from 'next/link';
import { Menu, Input, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import * as Styled from './style';
import ColorPalette from '../../styles/colors';

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <>
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
      <Styled.Content>{children}</Styled.Content>
    </>
  );
}

export default AppLayout;
