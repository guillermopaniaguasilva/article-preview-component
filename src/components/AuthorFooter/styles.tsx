import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import { fadeIn } from '../../styles/animations';

export const Container = styled.div`
  animation: ${fadeIn} 0.25s ease-in;
  display: flex;
  margin: 32px 32px 20px 32px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const DetailsContainer = styled.div`
  margin-left: 16px;
`;

export const Name = styled.p`
  color: ${COLORS.VERY_DARK_GRAYISH_BLUE};
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.12px;
`;

export const Date = styled.p`
  color: ${COLORS.GRAYISH_BLUE};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.12px;
`;
