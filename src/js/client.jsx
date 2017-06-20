import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import favicon from '../favicon.png'
import '../assets/scss/app.scss'

import Stage from './components/Stage'
import Details from './components/Details'

ReactDOM.render((
    <Router basename="/">
        <Switch>
            <Route exact path="/" component={Stage} />
            <Route path="/:route" render={({ match }) => (
                <Details route={match.params.route} />
            )} />
        </Switch>
    </Router>
), document.getElementById('app'))
