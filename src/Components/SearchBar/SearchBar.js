import React from 'react';
import './SearchBar.css';

// SearchBar allows a user to filter customers or users from the customerlist or userlist

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SearchBar">
                <input className={this.props.type} placeholder="search" onChange={(event) => this.props.searchBarChange(event, this.props.type)}></input>
            </div>
        )
    }
}

export default SearchBar;