import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default class WorkDetails extends React.Component {
    render() {
        return (
            <main className="WorkDetails">
                <Header/>
                <h1>{this.props.route}</h1>
                <Footer />
            </main>
        );
    }
}
