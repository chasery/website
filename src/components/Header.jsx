import React, { Component } from 'react';
var logo = require('../assets/svg/chasery-logo.svg');
export class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-logo" dangerouslySetInnerHTML={{__html: logo}} />
                <h1 className="Header-subHeading"><span className="u-isHidden">Ryan Chase is </span>A user experience visual designer and front end developer</h1>
            </div>
        );
    }
}
export default Header;
