import { styled } from 'styled-components';
import { COLORS } from '../../styles/variables';

type BackgroundProps = {
  theme: string;
};

type ImageProps = {
  theme: string;
};

export const Background = styled.div<BackgroundProps>`
  width: 32px;
  height: 32px;
  background: ${({ theme }) =>
    theme === 'dark'
      ? COLORS.DESATURATED_DARK_BLUE
      : COLORS.LIGHT_GRAYISH_BLUE};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media only screen and (min-width: 600px) {
    &:hover {
      cursor: pointer;
      background-color: ${COLORS.DESATURATED_DARK_BLUE};

      & img {
        filter: brightness(0) invert(1);
      }
    }
  }
`;

export const Image = styled.img<ImageProps>`
  width: 15px;
  height: 13px;
  ${({ theme }) => (theme === 'dark' ? 'filter: brightness(0) invert(1);' : '')}
`;
