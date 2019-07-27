import React from 'react';

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
            <div className="overView">
                <ul className="overView__list">
                    <li className="overView__list-item">#TechDesign</li>
                    <li className="overView__list-item">#Healthcare Revolution</li>
                    <li className="overView__list-item">#Future</li>
                </ul>

                <img 
                    className={`{this.state.enlarge} ? overView__image overView__image--enlarged : overView__image`} 
                    src={require(`../images/back.jpg`)} 
                    alt="background"
                    onClick={this.handleEnlarge}
                />

            </div>
        );
    };
}

export default OverView;