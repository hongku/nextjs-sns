import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProfileItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const ProfileItemTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
`;

export const InputBox = styled.div`
  display: flex;

  button {
    margin-left: 10px;
  }
`;
