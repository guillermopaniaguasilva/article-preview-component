import { useState } from 'react';
import { Container, Content, Image, Title, Summary } from './styles';
import AuthorFooter from '../AuthorFooter/AuthorFooter';
import SharePane from '../SharePane/SharePane';

type Article = {
  title: string;
  summary: string;
  author: string;
  date: string;
};

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const { title, summary, author, date } = article;

  const [showSharePane, setShowSharePane] = useState(false);

  const onShareClick = () => setShowSharePane(!showSharePane);

  return (
    <Container>
      <Image src="assets/images/drawers.jpg" />
      <Content>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
      </Content>
      {showSharePane ? (
        <SharePane onShareClick={onShareClick} />
      ) : (
        <AuthorFooter author={author} date={date} onShareClick={onShareClick} />
      )}
    </Container>
  );
};

export default ArticleCard;
