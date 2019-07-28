import React from "react";
import data from "../data/data.js";
import styled from 'styled-components';


const ArticleWrapper = styled.article`
  display: block;
  width: 100%;
`;

const ArticleImage = styled.img`

  width: 100vw;
  height: 40vh;
  transform: translateX(-1rem);
`;

const H3 = styled.h3`
  display: block;
  margin: 1rem 0;
`;

const ArticleTitle = styled.h2`
  display: block;
  width: 70%;
  margin: 1.5rem 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const ArticleBody = styled.p`
  display: block;
  margin: 2rem 0;
  font-size: 1.5rem;
  line-height: 1.8;
  color: grey;
`;

const ArticleFooter = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 5rem;
    border-radius: 50%;
    margin-right: 2rem;
  }

  p {
    font-size: 1.6rem;

    span {
      display: inline-block;
      font-size: 2rem;
      padding-bottom: 4px;
      border-bottom: 1px solid grey;
    }
  }
`;

class Article extends React.Component {

  // check the url
  componentDidMount() { this.props.click(); }
  componentWillUnmount() { this.props.click(); }

  render() {

    // get specific article from data.js which matches the id that comes from Route
    const article = data.find( current => current.id === parseInt(this.props.match.params.id, 10) );

    return (
      <ArticleWrapper>
          <ArticleImage src={require(`../images/${article.id}${article.id}.jpg`)} alt="article photo"/>
          <H3>U.S. &not; {article.type}</H3>
          <ArticleTitle >{article.title}</ArticleTitle>
          <ArticleBody>{article.article}</ArticleBody>
          <ArticleFooter>            
              <img src={require(`../images/${article.id}.jpg`)} alt="author"/>
              <p>by <span>{article.author}</span></p>
          </ArticleFooter>
      </ArticleWrapper>
    );
  }
}

export default Article;
