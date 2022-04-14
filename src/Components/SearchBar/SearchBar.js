import React from 'react';
import './SearchBar.css';

// SearchBar allows a user to filter customers or users from the customerlist or userlist

class SearchBar extends React.Component {


    render() {
        return (
            <div className="SearchBar">
                <input placeholder="search"></input>
            </div>
        )
    }
}

export default SearchBar;