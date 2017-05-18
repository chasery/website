import React, { Component } from 'react';
import ReactSVG from 'react-svg';
export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <ReactSVG
                    path="/assets/svg/chasery-logo.svg"
                    className="Header-logo"
                    evalScript="always"
                />
                <h1 className="Header-text">A user experience designer and developer</h1>
            </div>
        );
    }
}
export default Header;
