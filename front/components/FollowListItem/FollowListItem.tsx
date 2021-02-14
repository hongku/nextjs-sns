import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, CloseOutlined } from '@ant-design/icons';
import * as Styled from './style';

type Props = {
  user: { image: string; name: string };
};

function FollowListItem({ user }: Props) {
  return (
    <Styled.FollowListItemWrapper>
      <Avatar size={48} icon={<UserOutlined />} {...(user.image && { src: user.image })} />
      <Styled.UserName>{user.name}</Styled.UserName>
      <Styled.DeleteButton shape="circle" icon={<CloseOutlined />} />
    </Styled.FollowListItemWrapper>
  );
}

export default FollowListItem;
