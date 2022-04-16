import React from 'react';
import './Customer.css';

// Customer

class Customer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Customer' id={this.props.id} onClick={this.props.customerChange} >
                {this.props.name}
            </div>
        )
    }
}

export default Customer;