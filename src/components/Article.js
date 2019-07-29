import React from "react";
import data from "../data/data.js";
import styled, { keyframes } from 'styled-components';

import { colors } from './colors.js';

const fadeIn = keyframes`
  0% { 
    opacity: 0;
    transform: scale(0.75); 
  }
  100% { 
    opacity: 1;
    transform: scale(1);
  }
`;

const ArticleWrapper = styled.article`
  display: block;
  width: 100%;

  animation: ${fadeIn} 0.5s 0.2s both;
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
  width: 80%;
  position: relative;
  margin: 3rem auto 5rem auto;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;

  ::after {
    content:'';
    display: block;
    position: absolute;
    left: 50%;
    bottom: -1rem;
    width: 60%;
    height: 3px;
    background-color: ${colors.secondary};
    transform: translateX(-50%);
  }
`;

const ArticleBody = styled.p`
  display: block;
  padding: 2rem 3rem;
  margin: 2rem 0 4rem 0;
  font-size: 1.5rem;
  line-height: 2;
  color: grey;
  background-color: ${colors.primary};
  box-shadow: 0 0 1rem rgba(112, 112, 112, 0.25);

  @media( min-width: 900px) {
    font-size: 1rem;
  }
`;

const ArticleFooter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  img {
    width: 5rem;
    border-radius: 50%;
    margin: 0 2rem;

    @media(min-width: 900px) {
      margin-right: 4rem;
      width: 8rem;
    }
  }

  p {
    display: block;
    width: 100%;
    font-size: 1.6rem;

    span {
      display: inline-block;
      font-size: 2rem;
      padding-bottom: 4px;
      border-bottom: 2px solid ${colors.secondary};

      @media(min-width: 900px) {
        margin-left: 1rem;
        font-size: 3rem;
      }
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
