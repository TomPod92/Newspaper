import React from 'react';
import data from "../data/data.js";
import OverView from "./Overview.js";
import ListItem from "./ListItem.js";
import styled from 'styled-components';

const ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const List = () => (
    // generate article list
    <>
        <OverView />
        
        <ListDiv>
            {data.map( current => <ListItem key={current.id} item={current}/>)}
        </ListDiv>
    </>
);

export default List;