import * as React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
    static displayName = Home.name;
    
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <p>Are you a manager?</p>
                <ul>
                    <li><Link to="/user-preferences">View user preferences and add new users</Link></li>
                    <li><Link to="/user-stats">View user stats</Link></li>
                </ul>
                <p>Are you a user?</p>
                <ul>
                    <li><Link to="/user-entry">Add yourself to the system</Link></li>
                </ul>
            </div>
        );
    }
}
