import React from 'react';
import './User.css';

// User

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='User' id={this.props.id} onClick={(event) => this.props.customerChange(event, 'User')} >
                {this.props.name}
            </div>
        )
    }
}

export default User;