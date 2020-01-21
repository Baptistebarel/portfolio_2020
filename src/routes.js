import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes 
import Home from './components/Home/home'
import Projects from './components/Projects/projects'
import About from './components/About/about'

import Layout from './hoc/Layout/layout'

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/about" exact component={About} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </Layout>
        );
    }
}

export default Routes;