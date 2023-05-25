import { useState, useEffect } from 'react';
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
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 600px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 600px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  const onShareClick = () => setShowSharePane(!showSharePane);

  const onDisplayTooltip = () => setShowShareTooltip(!showShareTooltip);

  return (
    <Container>
      <Image src="assets/images/drawers.jpg" />
      <Content>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>
        {!matches &&
          (showSharePane ? (
            <SharePane onShareClick={onShareClick} withShareButton />
          ) : (
            <AuthorFooter
              author={author}
              date={date}
              onShareClick={onShareClick}
            />
          ))}
        {matches && (
          <AuthorFooter
            author={author}
            date={date}
            onShareClick={onDisplayTooltip}
          />
        )}
        {matches &&
          (showShareTooltip ? <SharePane onShareClick={onShareClick} /> : null)}
      </Content>
    </Container>
  );
};

export default ArticleCard;
