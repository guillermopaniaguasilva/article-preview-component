import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';
import { fadeIn } from '../../styles/animations';

export const Container = styled.div`
  animation: ${fadeIn} 0.25s ease-in;
  width: 327px;
  height: 504px;
  background-color: ${COLORS.WHITE};
  border-radius: 8px;
  box-shadow: 0px 40px 40px -10px ${COLORS.LIGHT_GRAYISH_BLUE};

  @media only screen and (min-width: 600px) {
    width: 730px;
    height: 280px;
    display: flex;
    margin-right: 40px;
    position: relative;
  }
`;

export const Content = styled.div`
  margin: 0 32px;
`;

export const Image = styled.img`
  width: 327px;
  height: 200px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  @media only screen and (min-width: 600px) {
    width: 285px;
    height: 280px;
    border-radius: 0;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  margin-top: 38px;
  color: ${COLORS.VERY_DARK_GRAYISH_BLUE};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;

  @media only screen and (min-width: 600px) {
    margin-top: 32px;
  }
`;

export const Summary = styled.p`
  margin-top: 10px;
  color: ${COLORS.GRAYISH_BLUE};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.12px;

  @media only screen and (min-width: 600px) {
    margin-top: 12px;
  }
`;
