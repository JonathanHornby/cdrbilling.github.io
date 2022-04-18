import React from 'react';
import './ContentWindow.css';
import CustomerView from '../Customers/CustomerView/CustomerView';
import UserView from '../Users/UserView/UserView';
import RecordView from '../Records/RecordView/RecordView';
import ReportView from '../Reports/ReportView';


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
            display = <RecordView recordsData={this.props.recordsData} getCaller={this.props.getCaller} getCustomer={this.props.getCustomer} />
        } else if(view === 'Reports') {
            display = <ReportView />
        }
        return (
            <div className="ContentWindow">
                {display}
            </div>
        )
    }
}

export default ContentWindow;