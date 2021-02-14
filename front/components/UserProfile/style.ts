import styled from 'styled-components';
import ColorPalette from '../../styles/colors';

export const PorfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProfileTop = styled.div`
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

export const Nickname = styled.strong`
  font-size: 14px;
`;

export const Description = styled.p`
  font-size: 15px;
  color: ${ColorPalette.GRAY_666D75};
`;

export const ProfileMid = styled.div`
  display: flex;
  padding-top: 25px;
`;

export const InfoItem = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const InfoTitle = styled.span`
  font-size: 16px;
`;

export const InfoText = styled.strong`
  padding-left: 5px;
  font-size: 15px;
`;

export const ProfileBottom = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;
