import React from 'react';
import './ContentWindow.css';
import CustomerView from '../Customers/CustomerView/CustomerView';
import UserView from '../Users/UserView/UserView';
import RecordView from '../Records/RecordView/RecordView';

// ContentWindow

class ContentWindow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        let display = '';
        let view = this.props.view;
        if(view === 'Customers') {
            display = <CustomerView  customer={this.props.customer} />
        } else if(view === 'Users') {
            display = <UserView user={this.props.user} />
        } else if(view === 'Records') {
            display = <RecordView />
        }
        return (
            <div className="ContentWindow">
                {display}
            </div>
        )
    }
}

export default ContentWindow;