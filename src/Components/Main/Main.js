import React from 'react';
import './Main.css';

// Main component acts as a container for the components which will display tabulated data in the window

class Main extends React.Component {


    render() {
        return (
            <div className='MainWindow'>
                {/* MainLeft to display lists of customers / users / reports to select for display in MainRight */}
                <div className="MainLeft">
                    Test Main Left
                </div>
                {/* MainRight to display table data for the selected option in MainLeft */}
                <div className="MainRight">
                    Test Main Right
                </div>
            </div>
        )
    }
}

export default Main;