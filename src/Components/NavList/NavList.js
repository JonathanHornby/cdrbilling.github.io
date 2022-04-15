import React from 'react';
import './NavList.css';
import Customer from '../Customers/Customer/Customer';
import User from '../Users/User/User';
import SearchBar from '../SearchBar/SearchBar';

// NavList

class NavList extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        let view = this.props.view;
        
        if(view === 'Customers') {
            return (
                <div className='NavList borderdiv'>
                    <ul>
                        <li><p>Customers</p></li>
                        <li><SearchBar /></li>
                        {this.props.customerList.map(customer => {
                            return <li className='option'><Customer name={customer.name} id={customer.id} /></li>
                        })}
                    </ul>
                </div>
            )
        } else if(view === 'Users') {
            return (
                <div className='NavList borderdiv'>
                    <ul>
                        <li><p>Users</p></li>
                        <li><SearchBar /></li>
                        {this.props.userList.map(user => {
                            return <li className='option'><User name={user.name} id={user.id} /></li>
                        })}
                    </ul>
                </div>
            )
        } else if(view === 'Records') {
            return (
                <div className='NavList borderdiv'>
                    <ul>
                        <li><p>Records</p></li>
                        <li><SearchBar /></li>

                    </ul>
                </div>
            )
        } else if(view === 'Reports') {
            return (
                <div className='NavList borderdiv'>
                    <ul>
                        <li><p>Reports</p></li>
                        <li><SearchBar /></li>

                    </ul>
                </div>
            )
        }


    }
}

export default NavList;