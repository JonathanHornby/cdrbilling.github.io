import React from 'react';
import './ContentWindow.css';
import CustomerView from '../Customers/CustomerView/CustomerView';
import UserView from '../Users/UserView/UserView';

// ContentWindow

class ContentWindow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        let display = '';
        let view = this.props.view;
        if(view === 'Customers') {
            display = <CustomerView  customerId={this.props.customerId} />
        } else if(view === 'Users') {
            display = <UserView />
        }

        return (
            <div className="ContentWindow">
                {display}
            </div>
        )
    }
}

export default ContentWindow;