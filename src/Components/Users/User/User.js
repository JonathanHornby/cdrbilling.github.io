import React from 'react';
import './User.css';

// User

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='User'>
                {this.props.name}
            </div>
        )
    }
}

export default User;