import React from 'react';
import './Customer.css';

// Customer

class Customer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Customer'>
                {this.props.name}
            </div>
        )
    }
}

export default Customer;