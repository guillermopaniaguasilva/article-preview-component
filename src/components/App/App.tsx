import './App.css';
import ArticleCard from '../ArticleCard/ArticleCard';

const article = {
  title:
    'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
  summary:
    "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.",
  author: 'Michelle Appleton',
  date: '28 Jun 2020',
};

const App = () => {
  return <ArticleCard article={article} />;
};

export default App;
