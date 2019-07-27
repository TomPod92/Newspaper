import React from "react";
import data from "../data/data.js";


class Article extends React.Component {

  // check the url
  componentDidMount() { this.props.click(); }
  componentWillUnmount() { this.props.click(); }

  render() {

    // get specific article from data.js which matches the id that comes from Route
    const article = data.find( current => current.id === parseInt(this.props.match.params.id, 10) );

    return (
      <div className="article">
          {/* <img src={require(`../images/${article.id}${article.id}.jpg`)} alt="article photo"/> */}
          <h2 className="article__title">{article.title}</h2>
          <p className="article__body">{article.article}</p>
          <div className="article__footer">            
              <img src={require(`../images/${article.id}.jpg`)} alt="author"/>
              <p>{article.author}</p>
          </div>
      </div>
    );
  }
}

export default Article;
