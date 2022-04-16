import React from 'react';
import './Main.css';
import NavList from '../NavList/NavList';
import Home from '../Home/Home';
import ContentWindow from '../ContentWindow/ContentWindow';

// Main component acts as a container for the components which will display tabulated data in the window

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customerList: [
                {id: '1', name: 'Customer 1'},
                {id: '2', name: 'Customer 2'},
                {id: '3', name: 'Customer 3'}],
            userList: [
                {id: '1', name: 'User 1'},
                {id: '2', name: 'User 2'},
                {id: '3', name: 'User 3'}],
            customerId: "2",
            userId: "3"
        }

        this.changeCustomer = this.changeCustomer.bind(this);
    }

    changeCustomer(id) {
        this.setState({customerId: id});
    }

    render() {
        let mainLeft = '';
        let mainRight = '';
        let view = this.props.view;

        if(this.props.view === 'Home') {
            mainLeft = '';
            mainRight = <Home />;
        } else if (this.props.view === 'Customers') {
            mainLeft = <NavList customerList={this.state.customerList} view={view} customerChange={this.changeCustomer} />
            mainRight = <ContentWindow view={view} customerId={this.state.customerId} />
        } else if (this.props.view === 'Users') {
            mainLeft = <NavList userList={this.state.userList} view={view} />
            mainRight = <ContentWindow view={view} userId={this.userId}/>
        } else if (this.props.view === 'Records') {
            mainLeft = <NavList view={view} />
            mainRight = <ContentWindow view={view} />
        } else if (this.props.view === 'Reports') {
            mainLeft = <NavList view={view} />
            mainRight = <ContentWindow view={view} />
        }


        return (

            <div className='MainWindow'>
                {/* MainLeft to display lists of customers / users / reports to select for display in MainRight */}
                <div className="MainLeft">
                    {mainLeft}
                </div>
                {/* MainRight to display table data for the selected option in MainLeft */}
                <div className="MainRight">
                    {mainRight}
                </div>
            </div>
        )
    }
}

export default Main;