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
                    <p className='RecordViewp'>Use the options below to filter the desired call records.</p>
                    <table>
                        <tr>
                            <td>Date/time After:</td><td><input type="datetime-local"></input></td>
                            <td>Customer:</td>
                            <td>
                            <select id="select-state" placeholder="Pick a state...">
                                <option value="">Select a Customer...</option>
                            </select>
                            </td>
                            <td>Duration longer than (s)</td><td><input type="number"></input></td>
                        </tr>
                        <tr>
                            <td>Date/time Before:</td><td><input type="datetime-local"></input></td>
                            <td>User:</td>
                            <td>
                                <select id="select-state" placeholder="Pick a state...">
                                    <option value="">Select a Customer...</option>
                                </select>
                            </td>
                            <td>Duration shorter than (s)</td><td><input type="number"></input></td>
                        </tr>
                    </table>
                </div>
                <div className="RecordViewDisplay borderdiv">
                    <p className='RecordViewp'>Call data records:</p>
                    <tr>
                        <th>Date/Time of call</th><th>Caller Number</th><th>Destination number</th><th>User</th><th>Customer</th><th>Duration</th><th>Cost</th>
                    </tr>
                </div>
            </div>
        )
    }
}

export default RecordView;