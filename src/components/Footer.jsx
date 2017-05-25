import React, { Component } from 'react';
import ReactSVG from 'react-svg';
export class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <ul className="Footer-list">
                    <li className="Footer-item"><a className="Footer-anchor" href="https://www.linkedin.com/in/ryan-chase-75b79813">LinkedIn</a></li>
                    <li className="Footer-item"><a className="Footer-anchor" href="mailto:ryan@chasery.com">Email</a></li>
                    <li className="Footer-item"><a className="Footer-anchor" href="tel:503-367-7057">Call</a></li>
                </ul>
            </div>
        );
    }
}
export default Footer;
