import { Container, Heading, Icon } from './styles';
import ShareButton from '../ShareButton/ShareButton';

type SharePaneProps = {
  onShareClick: () => void;
};

const SharePane = ({ onShareClick }: SharePaneProps) => {
  return (
    <Container>
      <Heading>Share</Heading>
      <Icon src="assets/images/icon-facebook.svg" />
      <Icon src="assets/images/icon-twitter.svg" />
      <Icon src="assets/images/icon-pinterest.svg" />
      <ShareButton onClick={onShareClick} theme="dark" />
    </Container>
  );
};

export default SharePane;
