import React from 'react';
import './RecordView.css';

// RecordView

class RecordView extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='RecordViewDiv'>
                <div className="RecordViewFilter borderdiv">

                </div>
                <div className="RecordViewDisplay borderdiv">

                </div>
            </div>
        )
    }
}

export default RecordView;