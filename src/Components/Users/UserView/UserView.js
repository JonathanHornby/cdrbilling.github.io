import React from 'react';
import './UserView.css';

// UserView

class UserView extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="UserViewHead">
                    UserView Filter
                </div>
                <div className="UserViewDisplay">
                    UserView View
                </div>
            </div>
        )
    }
}

export default UserView;