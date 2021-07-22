import './App.css';
import Counter from './components/Counter';

const items  = ['banana', 'apple', 'orange'];

function App() {
  return (
    <div className="App">
        {items.map((item, index) =>
      <Counter name={item} key={index}/>)}
    </div>
  );
}

export default App;
