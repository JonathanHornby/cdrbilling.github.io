import React from 'react';
import './RecordView.css';
import Util from '../../../Util/Util'

// RecordView

class RecordView extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const sortedRecords = Util.sortByDate(this.props.recordsData);
        return (
            <div className='RecordViewDiv'>
                <div className="RecordViewFilter borderdiv">
                    <p className='RecordViewp'><h3>Use the options below to filter the desired call records.</h3></p>
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
                        <tr>
                            <td id="recordViewfilter" colSpan="6"><button>Filter</button></td>
                        </tr>
                    </table>
                </div>
                <div className="RecordViewDisplay borderdiv">
                    <p className='RecordViewp'><h3>Call data records:</h3></p>
                    <table>
                        <thead>
                            <tr>
                                <th>Date/Time of call</th><th>Caller Number</th><th>Destination number</th><th>User</th><th>Customer</th><th>Duration</th><th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                        {sortedRecords.map(record => {
                            const user = this.props.getCaller(record.simid);
                            const customer = this.props.getCustomer(user.customer);
                                return <tr>
                                            <td>{record.timeofcall}</td>
                                            <td>{record.simnumber}</td>
                                            <td>{record.destinationnumber}</td>
                                            <td><a href="#">{user.name}</a></td>
                                            <td><a href="#">{customer.name}</a></td>
                                            <td>{Util.displaytime(record.durationofcall)}</td>
                                            <td>${Math.round(record.durationofcall*customer.cost*100)/100}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default RecordView;