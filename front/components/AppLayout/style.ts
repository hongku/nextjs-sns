import styled from 'styled-components';
import { Row, Menu } from 'antd';
import ColorPalette from '../../styles/colors';

export const NavBarWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px #f0f1f2;
`;

export const NavBar = styled(Row)`
  max-width: 935px;
  height: 64px;
  margin: 0 auto;
`;

export const NavMenu = styled(Menu)`
  line-height: 62px;
  border-bottom: 0;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 935px;
  margin: 0 auto;
  padding-top: 30px;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 614px;
  margin-right: 28px;
  padding: 10px;
  border: 1px solid ${ColorPalette.GRAY_EEE};
`;

export const SkyWrapper = styled.aside`
  width: 100%;
  max-width: 293px;
`;
