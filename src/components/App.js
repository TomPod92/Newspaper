import React from "react";
import Header from "./Header.js";
import List from "./List.js";
import Article from "./Article.js";
import { Route, Switch, HashRouter } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import { colors } from './colors.js';

const GlobalStyle = createGlobalStyle`
  body { 
    box-sizing: border-box; 
    width: 100%;
    padding: 1rem;
    font-family: 'Lato', sans-serif;
    background-color: ${colors.background}
  }

  html { 
    font-size: 62.5%; 

    @media( min-width: 900px) {
      font-size: 80%; 
    }
  
  }
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit; 
    color: ${colors.fontColor};
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
          
            <Switch>
              <Route path="/" exact component={List}/>
              <Route path="/:id" render={(routeProps) => <Article {...routeProps} click={this.handleRouteChange}/>} />
            </Switch>
          
        </HashRouter>
      </>
    );
  }
}

export default App;
