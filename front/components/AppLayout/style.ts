import styled from 'styled-components';
import { Row, Menu } from 'antd';

export const NavBar = styled(Row)`
  height: 64px;
  padding: 0 40px;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const NavMenu = styled(Menu)`
  line-height: 62px;
  border-bottom: 0;
`;

export const Content = styled.div`
  margin-top: 20px;
  padding: 0 40px;
`;
