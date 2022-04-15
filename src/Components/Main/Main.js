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
        let mainLeft = '';
        let mainRight = '';
        let view = this.props.view;

        if(this.props.view === 'Home') {
            mainLeft = '';
            mainRight = <Home />;
        } else if (this.props.view === 'Customers') {
            mainLeft = <NavList customers={this.state.customers} view={view} />
            mainRight = <ContentWindow view={view} />
        } else {
            mainLeft = <NavList users={this.state.users} view={view} />
            mainRight = "Test main right"
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