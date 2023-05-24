import { Container, Avatar, DetailsContainer, Name, Date } from './styles';
import ShareButton from '../ShareButton/ShareButton';

type AuthorFooterProps = {
  author: string;
  date: string;
  onShareClick: () => void;
};

const AuthorFooter = ({ author, date, onShareClick }: AuthorFooterProps) => {
  return (
    <Container>
      <Avatar src="assets/images/avatar-michelle.jpg" />
      <DetailsContainer>
        <Name>{author}</Name>
        <Date>{date}</Date>
      </DetailsContainer>
      <ShareButton onClick={onShareClick} theme="light" />
    </Container>
  );
};

export default AuthorFooter;
