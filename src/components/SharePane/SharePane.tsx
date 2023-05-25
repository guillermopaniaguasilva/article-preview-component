import { Container, Heading, Icon } from './styles';
import ShareButton from '../ShareButton/ShareButton';

type SharePaneProps = {
  onShareClick: () => void;
  withShareButton?: boolean;
};

const SharePane = ({ onShareClick, withShareButton }: SharePaneProps) => {
  return (
    <Container>
      <Heading>Share</Heading>
      <Icon src="assets/images/icon-facebook.svg" />
      <Icon src="assets/images/icon-twitter.svg" />
      <Icon src="assets/images/icon-pinterest.svg" />
      {withShareButton && <ShareButton onClick={onShareClick} theme="dark" />}
    </Container>
  );
};

export default SharePane;
