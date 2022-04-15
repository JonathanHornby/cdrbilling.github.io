import React from 'react';
import './CustomerList.css';
import Customer from '../Customer/Customer';
import SearchBar from '../../SearchBar/SearchBar';

// CustomerList

class CustomerList extends React.Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className='CustomerList'>
                <ul>
                    <li><h4>Customers</h4></li>
                    <li><SearchBar /></li>
                    {this.props.customers.map(customer => {
                        return <li className='option'><Customer name={customer.name} id={customer.id} /></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default CustomerList;