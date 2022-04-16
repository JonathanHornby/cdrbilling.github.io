import React from 'react';
import RevenueGraph from '../../RevenueGraph/RevenueGraph';
import './UserView.css';

// UserView

class UserView extends React.Component {
    constructor(props) {
        super(props);

    }

    user = {
        id: "2",
        customerid: "1",
        name: "user 2",
        numbersimcards: "8",
        averev: "245",
        address: "user 1 address",
        contactname: "user 1 contact name",
        contactphone: "user 1 contact phone",
        contactemail: "user 1 contact email"
    }

    render() {
        return (
            <div className='UserViewDiv'>
                <div className="UserViewHead">
                    <div className="UserHeadTable borderdiv">
                        <table>
                            <tr><td>User Name: </td><td>{this.props.user.name}</td></tr>
                            <tr><td>Customer: </td><td>{this.props.user.customer}</td></tr>
                            <tr><td>Total Sim cards:</td><td>{this.props.user.numbersimcards}</td></tr>
                            <tr><td>3 Months ave Revenue:</td><td>${this.props.user.averev}</td></tr>
                        </table>
                    </div>
                    <div className="UserHeadGraph borderdiv">
                        <RevenueGraph />
                    </div>
                </div>

                <div className="UserViewDisplay borderdiv">
                    <table>
                        <tr><td span="2"><h4>User Information</h4></td></tr>
                        <tr><td>User address:</td><td>{this.props.user.address}</td><td>Data field 4: </td><td>Info 4</td></tr>
                        <tr><td>User Phone:</td><td>{this.props.user.contactphone}</td><td>Data field 6: </td><td>Info 6</td></tr>
                        <tr><td>User Email:</td><td>{this.props.user.contactemail}</td><td>Data field 7: </td><td>Info 7</td></tr>
                        <tr><td>Data field 1: </td><td>Info 1</td><td>Data field 7: </td><td>Info 8</td></tr>
                        <tr><td>Data field 2: </td><td>Info 2</td><td>Data field 8: </td><td>Info 9</td></tr>
                        <tr><td>Data field 3: </td><td>Info 3</td><td>Data field 9: </td><td>Info 10</td></tr>
                    </table>
                </div>
            </div>
        )
    }


}

export default UserView;