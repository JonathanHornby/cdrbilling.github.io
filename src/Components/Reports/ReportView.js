import React from 'react';
import './ReportView.css';

// ReportView

class RecordView extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='ReportViewDiv borderdiv'>
                <p>This will display call usage and revenue reports / graphs based on call data records</p>
            </div>
        )
    }
}

export default RecordView;