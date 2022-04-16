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
            customerList: [],
            customerNavList: [],
            userNavList: [],
            userList: [],
            customerId: "2",
            userId: "625aa3149b7bd6be98524d11",
            customer: "",
            user: "",
        }

        this.changeCustomer = this.changeCustomer.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.getCustomerData('customer', this.state.customerId);
        this.getCustomerData('user', this.state.userId);
    }

    changeCustomer(e, type = 'Customer') {
        if(type === 'Customer') {
            this.setState({customerId: e.target.id});
        } else if(type === 'User') {
            this.setState({userId: e.target.id});
        }
    }

    handleSearch(e, type) {
        if(type === 'CustomerSearch') {
            const regex = new RegExp(e.target.value, 'i')
            const custArray = this.state.customerList.filter((customer) => { return customer.name.match(regex)});
            this.setState({customerNavList: custArray})
        } else if(type === 'UserSearch') {
            const regex = new RegExp(e.target.value, 'i')
            const userArray = this.state.userList.filter((user) => { return user.name.match(regex)});
            this.setState({userNavList: userArray})
        }
    }

    // This should be API calls to fetch data from Database, but we are just using local .json files instead during development
    async getCustomerData(type = 'customer', id = this.state.customerId){
        if(type === 'customer') {
            const response = await fetch('./customers.json',{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            const customer = data.find(item => item.id === id);
            this.setState({
                "customer": customer,
                "customerList": data,
                "customerNavList": data
                });

        } else if(type === 'user') {
            const response = await fetch('./users.json',{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            const data = await response.json();
            const user = data.find(item => item.id === id);
            this.setState({
                "user": user,
                "userList": data,
                "userNavList": data
                });
        }
     }

     componentDidUpdate(prevProps, prevState) {
        if(prevState.customerId !== this.state.customerId) { 
            this.getCustomerData('customer', this.state.customerId);
        }
        if(prevState.userId !== this.state.userId) { 
            this.getCustomerData('user', this.state.userId);
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
            mainLeft = <NavList customerList={this.state.customerNavList} view={view} customerChange={this.changeCustomer} searchBarChange={this.handleSearch} />
            mainRight = <ContentWindow view={view} customer={this.state.customer} />
        } else if (this.props.view === 'Users') {
            mainLeft = <NavList userList={this.state.userNavList} view={view} customerChange={this.changeCustomer} searchBarChange={this.handleSearch} />
            mainRight = <ContentWindow view={view} user={this.state.user}/>
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