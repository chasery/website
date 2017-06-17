import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import favicon from '../favicon.png'
import '../assets/scss/app.scss'

import Stage from './components/Stage.jsx'
import Details from './components/Details.jsx'

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={Stage} />
            <Route path="/:route" render={({ match }) => (
                <Details detailsHeader={match.params.route} />
            )} />
        </Switch>
    </Router>
), document.getElementById('app'))
