import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    list-style: none;
    margin: 1rem 0;
    font-size: 1.5rem;
    overflow: hidden;
`;

const ListItem = styled.li`
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    
    :not(:last-child) {
        border-right: 1px dotted #ddd;
    }
`;

const ImageDiv = styled.div`
    padding: 1rem;
    width: 100%;

    @media(min-width: 500px ) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & img {
        width: 100%;
        height: 100%;

        @media(min-width: 500px ) {
            width: 80%;
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
            <div>
                <List>
                    <ListItem>#TechDesign</ListItem>
                    <ListItem>#Healthcare Revolution</ListItem>
                    <ListItem>#Future</ListItem>
                </List>

                <ImageDiv>
                    <img 
                        className={ this.state.enlarge ? 'overView__image overView__image--enlarged' : 'overView__image'} 
                        src={require(`../images/back.jpg`)} 
                        alt="background"
                        onClick={this.handleEnlarge}
                    />
                </ImageDiv>
                

            </div>
        );
    };
}

export default OverView;