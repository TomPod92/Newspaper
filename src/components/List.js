import React from 'react';
import data from "../data/data.js";
import ListItem from "./ListItem.js";

const List = () => (
    // generate article list
    <div className="article-list">
        {data.map( current => <ListItem key={current.id} item={current}/>)}
    </div>
);

export default List;