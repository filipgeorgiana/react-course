import './App.css';
import jobs from './data/jobs';
import List from './components/List';
import JobListElement from "./components/JobListElement";

function App() {
  return (
    <div className="App">
      <List items={jobs} itemElement={JobListElement}/>
    </div>
  );
}

export default App;
