import React from 'react';
import FollowListItem from '../FollowListItem';
import * as Styled from './style';

const mockUsers = [
  { id: 1, image: '', name: 'hongsun' },
  { id: 2, image: '', name: 'hongsunn2' },
  { id: 3, image: '', name: 'hongsunn3' },
  { id: 4, image: '', name: 'hongsunn4' },
];

function FollowList() {
  return (
    <Styled.FollowListWrapper>
      {mockUsers.map((user) => (
        <FollowListItem key={user.id} user={user} />
      ))}
    </Styled.FollowListWrapper>
  );
}

export default FollowList;
