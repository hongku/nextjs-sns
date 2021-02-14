import React from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import * as Styled from './style';

type Props = {
  onLogout: () => void;
};

function UserProfile({ onLogout }: Props) {
  return (
    <Styled.PorfileWrapper>
      <Styled.ProfileTop>
        <Avatar size={64} icon={<UserOutlined />} />
        <Styled.UserInfo>
          <Styled.Nickname>Nickname</Styled.Nickname>
          <Styled.Description>User Description</Styled.Description>
        </Styled.UserInfo>
      </Styled.ProfileTop>
      <Styled.ProfileMid>
        <Styled.InfoItem>
          <Styled.InfoTitle>팔로워</Styled.InfoTitle>
          <Styled.InfoText>1122</Styled.InfoText>
        </Styled.InfoItem>
        <Styled.InfoItem>
          <Styled.InfoTitle>팔로우</Styled.InfoTitle>
          <Styled.InfoText>748</Styled.InfoText>
        </Styled.InfoItem>
      </Styled.ProfileMid>
      <Styled.ProfileBottom>
        <Button type="primary" danger={true} style={{ width: '100%' }} onClick={onLogout}>
          Logout
        </Button>
      </Styled.ProfileBottom>
    </Styled.PorfileWrapper>
  );
}

export default UserProfile;
