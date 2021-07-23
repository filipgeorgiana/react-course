import './App.css';
import jobs from './data/jobs';
import List from './components/List';
import JobListElement from "./components/JobListElement";
import {SecondaryButton} from "./components/Button";
import styled, {ThemeProvider} from "styled-components";
import theme from "./theme";
import Navigation from "./components/Navigation";
import JobListPage from "./containers/JobListPage";
import React, {Component, Fragment} from "react";


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import RouterPlayground from "./RouterPlayground";


const NotFound = () => <div>404 Page not found</div>
const Header = styled.header`
    width: 100%;
    height: 120px;
    margin: none;
    padding: 10px;
    font-size: 24px;
    background-color: #2b2d30;
    color: whitesmoke;
`;

function App() {
  return (
      <ThemeProvider theme={theme}>
          <div className="App">
              <Header >
                  <h1 className="App-title"> Routing with React Router</h1>
              </Header>
              <Router>
                  <Fragment>
                      <Navigation />
                      <Switch>
                          <Route exact path="/" component={JobListPage} />
                          <Route component={NotFound}/>
                          {/*<Route exact path="/add-job" component={CreateJobPage} />*/}
                      </Switch>
                      {/*<SecondaryButton> Fill in form </SecondaryButton>*/}
                      {/*<List items={jobs} itemElement={JobListElement}/>*/}
                      {/*<JobListPage/>*/}
                  </Fragment>
              </Router>

          </div>
      </ThemeProvider>
  );
}

export default App;
