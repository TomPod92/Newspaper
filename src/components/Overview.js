import React from 'react';
import styled from 'styled-components';
import { colors } from './colors.js';

const OverViewContainer = styled.div`
    width: 100%;
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 1rem 0;
    font-size: 1.5rem;
    overflow: hidden;
    width: 100%;
`;

const ListItem = styled.li`
    flex: 0 1 auto;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 1rem 2rem;
    
    :not(:last-child) {
        border-right: 1px dotted #ddd;
    }

    :hover:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        display: block;
        width: 10rem;
        height: 3px;
        background-color: ${colors.secondary};
        transform: translate(-50%, 0);
        z-index: 4;
    }
`;

const ImageDiv = styled.div`
    padding: 1rem;
    margin: 2rem 0 3rem 0;
    width: 100%;
    background-color: ${colors.primary};
    box-shadow: 0 0 1rem rgba(112, 112, 112, 0.25);

    @media(min-width: 500px ) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & img {
        width: 100%;
        height: 100%;
        /* transform:${ props => props.enlarge ? 'scale(1.05)' : 'scale(1)'}; */

        @media(min-width: 500px ) {
            width: 70%;
        }

        @media(min-width: 900px ) {
            width: 50%;
        }
    }
`;

class OverView extends React.Component {

    state = {
        enlarge: false
    }

    handleEnlarge = () => {
        this.setState((prevState) => (
            {enlarge: !prevState.enlarge}
        ))
    };

    render() {
        return (
            <OverViewContainer>
                <List>
                    <ListItem>#TechDesign</ListItem>
                    <ListItem>#Healthcare Revolution</ListItem>
                    <ListItem>#Future</ListItem>
                </List>

                <ImageDiv>
                    <img 
                        // enlarge={this.state.enlarge}
                        src={require(`../images/back.jpg`)} 
                        alt="background"
                        onClick={this.handleEnlarge}
                    />
                </ImageDiv>
                

            </OverViewContainer>
        );
    };
}

export default OverView;