import React from 'react';
import './Navigation.css'
import logo from '../../logo.svg';

// Vertical navigation pane

class Navigation extends React.Component {

    render() {
        return (
            <div className='Navigation'>
                <img src={logo} className="App-logo" alt="logo" />
                    <ul>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Reports</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
            </div>
        )
    }
}

export default Navigation;