import React from "react";
import Header from "./Header.js";
import List from "./List.js";
import Article from "./Article.js";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body { 
    box-sizing: border-box; 
    width: 100vw;
    padding: 1rem;
    font-family: 'Lato', sans-serif;
  }
  html { font-size: 62.5%; }
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
  }
`;

class App extends React.Component {
  state = {
    iconName: 'icon-search'
  }

  handleRouteChange = () => {
    // change header icon depending on the url
    if(window.location.href.endsWith('/')) {
      this.setState({iconName: 'icon-search'})
    } else {
      this.setState({iconName: 'icon-share2'})
    }
  }

  render() {
    return (
      <>
        <GlobalStyle/>
        <HashRouter>
          <Header iconName={this.state.iconName}/>
          <main>
            <Switch>
              <Route path="/" exact component={List}/>
              <Route path="/:id" render={(routeProps) => <Article {...routeProps} click={this.handleRouteChange}/>} />
            </Switch>
          </main>
        </HashRouter>
      </>
    );
  }
}

export default App;
