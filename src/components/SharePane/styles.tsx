import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import { fadeIn } from '../../styles/animations';

export const Container = styled.div`
  animation: ${fadeIn} 0.25s ease-in;
  width: 327px;
  height: 64px;
  margin-top: 16px;
  margin-left: -32px;
  padding-right: 32px;
  background-color: ${COLORS.VERY_DARK_GRAYISH_BLUE};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 600px) {
    width: 248px;
    height: 67px;
    position: absolute;
    bottom: 40%;
    left: 79.5%;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px var(--box-shadow);

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      bottom: -10px;
      left: 50%;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid ${COLORS.VERY_DARK_GRAYISH_BLUE};
    }
  }
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
