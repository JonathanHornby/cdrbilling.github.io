import React from 'react';
import './UserList.css';
import User from '../User/User';
import SearchBar from '../../SearchBar/SearchBar';

// UserList

class UserList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='UserList'>
                <ul>
                    <li><h4>Users</h4></li>
                    <li><SearchBar /></li>
                    {this.props.users.map(user => {
                        return <li className='option'><User name={user.name} /></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default UserList;