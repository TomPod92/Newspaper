import React from 'react';
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import sprite from '../images/sprite.svg';

class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div className="header__menu">
                    <Link to='/'>Go back</Link>
                </div>
                <h1 className="header__title">The Fortnight</h1>
                <div className="header__icon">
                    <svg>
                        <use xlinkHref={`${sprite}#${this.props.iconName}`}></use>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Header;