import React, { Component } from 'react';
import ReactSVG from 'react-svg';
export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-logo">
                    <ReactSVG
                        path="/assets/svg/chasery-logo.svg"
                        evalScript="always"
                    />
                </div>
                <h1 className="Header-subHeading"><span className="u-isHidden">Ryan Chase is </span>a user experience visual designer and front end developer</h1>
            </div>
        );
    }
}
export default Header;
