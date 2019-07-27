import React from "react";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const ListItem = props => (
  <div className="article-list__item">
    <Link to={`/${props.item.id}`}>{props.item.title}</Link>
  </div>
);

export default ListItem;
