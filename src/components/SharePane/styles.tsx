import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import { fadeIn } from '../../styles/animations';

export const Container = styled.div`
  animation: ${fadeIn} 0.25s ease-in;
  width: 327px;
  height: 64px;
  margin-top: 16px;
  padding-right: 32px;
  background-color: ${COLORS.VERY_DARK_GRAYISH_BLUE};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;
`;

export const Heading = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${COLORS.GRAYISH_BLUE};
  margin-left: 32px;
  margin-right: 20px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;
