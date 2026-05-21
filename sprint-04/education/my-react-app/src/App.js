import './App.css'; // CSS Stylesheet - visible for each component
import Book from './components/Book';
import Article from './components/Article';
import Badge from './components/Badge';
import Button from './components/Button';

function App() {
  return (
      <>
        <h1>Web using React App</h1>

        <h2>1. CSS Stylesheet (Book)</h2>
        <Book name="JS" price="100 uah" />
        <p></p>
        <Book name="JSX" price="300 uah" />

        <h2>2. Inline CSS (Article)</h2>
        <Article />

        <h2>3. CSS Module Component (Badge)</h2>
        <Badge label="New" size="small" />
        <Badge label="Sale" />
        <Badge label="Premium" size="large" />

        <h2>4. CSS: styled-components (JS-libraries)</h2>
        <Button primary> Button </Button>
        <p></p>
      </>
  )
}

export default App;