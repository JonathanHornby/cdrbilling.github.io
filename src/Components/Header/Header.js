import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

// Header provides a space at the top and to show profile and settings icons

class Header extends React.Component {


    render() {
        return (
            <div className="Header">
                <div className='HeaderLeft'>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className='HeaderRight'>
                    <h1>CDR Billing</h1>
                </div>
            </div>
        )
    }
}

export default Header;