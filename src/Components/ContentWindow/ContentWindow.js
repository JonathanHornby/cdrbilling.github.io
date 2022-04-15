import React from 'react';
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