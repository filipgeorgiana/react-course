import './App.css';
import jobs from './data/jobs';
import List from './components/List';
import JobListElement from "./components/JobListElement";
import {SecondaryButton} from "./components/Button";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import Navigation from "./components/Navigation";
function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title"> Styled Components & Themes</h1>
              </header>
              <Navigation />
              <SecondaryButton> Fill in form </SecondaryButton>
              <List items={jobs} itemElement={JobListElement}/>
          </div>
      </ThemeProvider>
  );
}

export default App;
