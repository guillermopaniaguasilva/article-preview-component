import { Background, Image } from './styles';

type ShareButtonProps = {
  theme: string;
  onClick: () => void;
};

const ShareButton = ({ onClick, theme }: ShareButtonProps) => {
  return (
    <Background onClick={onClick} theme={theme}>
      <Image src="assets/images/icon-share.svg" theme={theme} />
    </Background>
  );
};

export default ShareButton;
