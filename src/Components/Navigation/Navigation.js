import React from 'react';
import './Navigation.css';
import people from './pictures/people.png';
import building from './pictures/building.png';
import cells from './pictures/cells.png'
import chart from './pictures/chart.png'
import logout from './pictures/logout.png'
import home from './pictures/home.png'


// Vertical navigation pane

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleViewChange = this.handleViewChange.bind(this);
    }

    handleViewChange(e) {
        //this.props.changeView(e.target.innerHTML);
        this.props.changeView(e.target.title);
    }

    componentDidUpdate(prevProps) {
        if(this.props.selected !== prevProps.selected) {
            this.render();
        }
    }

    render() {
        let alt = "People icons created by SBTS2018 - Flaticon";
        return (
            <div className='Navigation'>
                    <ul>
                        <li title='Home' id={this.props.selected==="Home" ? "selected" : "option"} onClick={this.handleViewChange}>
                            <img src={home} width="30" title="Home" alt={alt} /></li>
                        <li title='Customers' id={this.props.selected==="Customers" ? "selected" : "option"} onClick={this.handleViewChange}>
                            <img src={building} width="30" title="Customers" alt={alt} /></li>
                        <li title="Users" id={this.props.selected==="Users" ? "selected" : "option"} onClick={this.handleViewChange}>
                            <img src={people} width="30" title="Users" alt={alt} /> </li>
                        <li title="Records" id={this.props.selected==="Records" ? "selected" : "option"} onClick={this.handleViewChange}>
                            <img src={cells} width="30" title="Records" alt={alt} /> </li>
                        <li title="Reports" id={this.props.selected==="Reports" ? "selected" : "option"} onClick={this.handleViewChange}>
                            <img src={chart} width="30" title="Reports" alt={alt} /> </li>
                        <li><img src={logout} width="30" title="Logout" alt={alt}  onClick={this.handleViewChange}/> </li>
                        {/*
                        <li id={this.props.selected==="Customers" ? "selected" : "option"}><a href="#" onClick={this.handleViewChange}>Customers</a></li>
                        <li id={this.props.selected==="Users" ? "selected" : "option"}><a href="#" onClick={this.handleViewChange}>Users</a></li>
                        <li id={this.props.selected==="Records" ? "selected" : "option"}><a href="#" onClick={this.handleViewChange}>Records</a></li>
                        <li id={this.props.selected==="Reports" ? "selected" : "option"}><a href="#" onClick={this.handleViewChange}>Reports</a></li>
                        <li><a href="#">Logout</a></li>
                        */}
                    </ul>
            </div>
        )
    }
}

export default Navigation;
