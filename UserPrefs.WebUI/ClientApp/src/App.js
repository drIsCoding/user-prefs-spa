import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import UserPreferencesContainer from './components/userPreferences/userPreferencesContainer'

import './custom.css'
import UserEntryContainer from './components/userEntry/userEntryContainer';


export default class App extends Component {

    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} title="Home" />
                <Route path='/user-preferences' component={UserPreferencesContainer} title="User Preferences"  />
                <Route path='/user-entry' component={UserEntryContainer} title="User Entry"   />
            </Layout>
        );
    }
}
