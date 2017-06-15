import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import favicon from '../favicon.png'
import '../assets/scss/app.scss'

import Stage from './components/Stage.jsx'
import WorkDetails from './components/WorkDetails.jsx'

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={Stage}></Route>
            <Route path="/:route" render={({ match }) => (
                <WorkDetails example={examples.find(e => e.route === match.params.route)} />
            )} />
        </Switch>
    </Router>
), document.getElementById('app'))

const examples = [
    {
        "name":"Data Review",
        "route":"data-review"
    },{
        "name":"Waivers Portals",
        "route":"waivers-portals"
    }
]
