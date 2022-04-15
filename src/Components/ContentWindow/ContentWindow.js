import React from 'react';
import logo from '../../logo.svg';
import './ContentWindow.css';

// ContentWindow

class ContentWindow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="ContentWindow">
                {this.props.view}
            </div>
        )
    }
}

export default ContentWindow;