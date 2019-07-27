import React from "react";
import Header from "./Header.js";
import List from "./List.js";
import Article from "./Article.js";
import OverView from "./Overview.js";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
      <div>
        <BrowserRouter>
          <Header iconName={this.state.iconName}/>
          <OverView />

          <Switch>
            <Route path="/" exact component={List}/>
            <Route path="/:id" render={(routeProps) => <Article {...routeProps} click={this.handleRouteChange}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
