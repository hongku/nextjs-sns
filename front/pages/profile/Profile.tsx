import React, { useState } from 'react';
import Head from 'next/head';
import { Input, Button } from 'antd';
import AppLayout from '../../components/AppLayout';
import * as Styled from './style';
import FollowList from '../../components/FollowList';

function Profile() {
  const [nickname, setNickname] = useState('');

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <AppLayout>
        <Styled.ProfileWrapper>
          <Styled.ProfileItem>
            <Styled.ProfileItemTitle>닉네임 변경</Styled.ProfileItemTitle>
            <Styled.InputBox>
              <Input placeholder="변경할 이름" onChange={handleNicknameChange} value={nickname} />
              <Button type="primary" disabled={nickname.length < 1}>
                수정
              </Button>
            </Styled.InputBox>
          </Styled.ProfileItem>
          <Styled.ProfileItem>
            <Styled.ProfileItemTitle>팔로잉 목록</Styled.ProfileItemTitle>
            <FollowList />
          </Styled.ProfileItem>
          <Styled.ProfileItem>
            <Styled.ProfileItemTitle>팔로워 목록</Styled.ProfileItemTitle>
            <FollowList />
          </Styled.ProfileItem>
        </Styled.ProfileWrapper>
      </AppLayout>
    </>
  );
}

export default Profile;
