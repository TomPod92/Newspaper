import React from 'react';
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import sprite from '../images/sprite.svg';
import styled from 'styled-components';

const HeaderDiv = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
`;

const HeaderMenu = styled(Link)`
    display: flex;
    align-items: center;
    position: relative;
    width: 2rem;
    height: 2rem;
    margin-right: 3rem;
    transition: all .5s ease;

    span {
        width: 100%;
        height: 2px;
        background-color: black;
        transition: all .5s ease;

        ::before,
        ::after {
            display: block;
            content: '';
            position: absolute;
            right: 0;
            width: 100%;
            height: 2px;
            background-color: black;
            transform-origin: right;
            transition: all .3s ease;
        }

        ::before {transform: translateY(-5px);}
        ::after {transform: translateY(5px);}
    }

    &.rotate {
        transform: rotate(180deg);
    }

    &.rotate span::before {
        transform: translateY(0) rotate(45deg);
        width: 70%;
    }

    &.rotate span::after {
        transform: translateY(0) rotate(-45deg);
        width: 70%;
    }  
`;

const H1 = styled.h1`
    font-size: 2rem;
    margin-right: auto;
`;

const HeaderIcon = styled.div`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
`;

class Header extends React.Component {
    render() {
        return (
            <HeaderDiv>
                <HeaderMenu as={Link} to='/' className={this.props.iconName === 'icon-share2' && 'rotate'}>
                    <span></span>
                </HeaderMenu>

                <H1>The Fortnightly</H1>

                <HeaderIcon as="svg">
                    <use xlinkHref={`${sprite}#${this.props.iconName}`}></use>
                </HeaderIcon>
            </HeaderDiv>
        );
    }
}

export default Header;