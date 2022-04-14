import React from 'react';
import './Navigation.css'


// Vertical navigation pane

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleViewChange = this.handleViewChange.bind(this);
    }

    handleViewChange(e) {
        this.props.changeView(e.target.innerHTML);
    }

    componentDidUpdate(prevProps) {
        console.log("In did update");
        if(this.props.selected !== prevProps.selected) {
            console.log("In did update TRUE");
            this.render();
        }
    }

    render() {
        return (
            <div className='Navigation'>
                    <ul>
                        <li id={this.props.selected==="Customers" ? "selected" : "option"}><a href="#" onClick={this.handleViewChange}>Customers</a></li>
                        <li id={this.props.selected==="Users" ? "selected" : "option"}><a href="#" onClick={this.handleViewChange}>Users</a></li>
                        <li id={this.props.selected==="Reports" ? "selected" : "option"}><a href="#" onClick={this.handleViewChange}>Reports</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
            </div>
        )
    }
}

export default Navigation;