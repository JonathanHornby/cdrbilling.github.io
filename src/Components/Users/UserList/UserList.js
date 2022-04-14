import React from 'react';
import './UserList.css';
import User from '../User/User';

// UserList

class UserList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='UserList'>
                <ul>
                    <li>Users</li>
                    {this.props.users.map(user => {
                        return <li className='option'><User name={user.name} /></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default UserList;