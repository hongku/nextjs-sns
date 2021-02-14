import styled from 'styled-components';
import { Button } from 'antd';

export const FollowListItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const UserName = styled.strong`
  margin-top: 8px;
  font-size: 14px;
`;

export const DeleteButton = styled(Button)`
  position: absolute;
  right: 5px;
  top: -5px;
  min-width: 24px;
  width: 24px;
  height: 24px;

  span {
    position: relative;
    top: -3px;
    font-size: 14px;
  }
`;
