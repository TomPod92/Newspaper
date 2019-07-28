import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const ListItemDiv = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #eee;
  margin-bottom: 1rem;
  text-decoration: none;
  transition: all .3s ease;

  &:hover {
    background-color: #eee;
  }

  @media(min-width: 500px ) {
    width: 60%;
  }
`;

const Info = styled.div`
  padding: 1rem 0;
  width: 75%;
  text-decoration: none;
  color: black;

  & h2 {
    font-size: 2rem;
    line-height: 1.3;
  }

  & h3 {
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.3;
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;

  & img {
    width: 6rem;
    height: 6rem;
  }
`;

const ListItem = props => (

  <ListItemDiv as={Link} to={`/${props.item.id}`}>
    <Info>
        <h3>{props.item.type}</h3>
        <h2>{props.item.title}</h2>
    </Info>

    <Image>
      <img src={require(`../images/${props.item.id}${props.item.id}.jpg`)} alt="article pic"/>
    </Image>
    
  </ListItemDiv> 
);

export default ListItem;
