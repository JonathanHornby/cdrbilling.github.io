import React from 'react';
import './Main.css';
import CustomerList from '../Customers/CustomerList/CustomerList';
import UserList from '../Users/UserList/UserList';

// Main component acts as a container for the components which will display tabulated data in the window

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customers: [
                {id: '1', name: 'Customer 1'},
                {id: '2', name: 'Customer 2'},
                {id: '3', name: 'Customer 3'}],
            users: [
                {id: '1', name: 'User 1'},
                {id: '2', name: 'User 2'},
                {id: '3', name: 'User 3'}]
        }
    }

    render() {
        return (
            <div className='MainWindow'>
                {/* MainLeft to display lists of customers / users / reports to select for display in MainRight */}
                <div className="MainLeft">
                    {this.props.view==='Customers' ? <CustomerList customers={this.state.customers} /> : <UserList users={this.state.users} />}
                </div>
                {/* MainRight to display table data for the selected option in MainLeft */}
                <div className="MainRight">
                    Test Main Right

                </div>
            </div>
        )
    }
}

export default Main;