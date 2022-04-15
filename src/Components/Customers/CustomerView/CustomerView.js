import React from 'react';
import './CustomerView.css';
import graphexample from './pictures/graphexample.png';

// CustomerView

class CustomerView extends React.Component {
    constructor(props) {
        super(props);
    

    }

    customer = {
        id: "1",
        name: "Customer 1",
        numberusers: "8",
        numbersimcards: "8",
        averev: "345",
    }

    render() {
        return (
            <div className='CustomerViewDiv'>
                <div className="CustomerViewHead">
                    <div className="CustomerHeadTable borderdiv">
                        <table>
                            <tr><td>Customer Name: </td><td>{this.customer.name}</td></tr>
                            <tr><td>Total Users: </td><td>{this.customer.numberusers}</td></tr>
                            <tr><td>Total Sim cards:</td><td>{this.customer.numbersimcards}</td></tr>
                            <tr><td>3 Months ave Revenue:</td><td>${this.customer.averev}</td></tr>
                        </table>
                    </div>
                    <div className="CustomerHeadGraph borderdiv">
                        <img className="graphimage" src={graphexample}></img>
                    </div>
                </div>

                <div className="CustomerViewDisplay borderdiv">
                    <table>
                        <tr><td span="2"><h4>Customer Information</h4></td></tr>
                        <tr><td>Customer address:</td><td>Example customer address</td><td>Data field 4: </td><td>Info 4</td></tr>
                        <tr><td>Contact Name:</td><td>{this.customer.name}</td><td>Data field 5: </td><td>Info 5</td></tr>
                        <tr><td>Contact Phone:</td><td>{this.customer.name}</td><td>Data field 6: </td><td>Info 6</td></tr>
                        <tr><td>Contact Email:</td><td>{this.customer.name}</td><td>Data field 7: </td><td>Info 7</td></tr>
                        <tr><td>Data field 1: </td><td>Info 1</td><td>Data field 7: </td><td>Info 8</td></tr>
                        <tr><td>Data field 2: </td><td>Info 2</td><td>Data field 8: </td><td>Info 9</td></tr>
                        <tr><td>Data field 3: </td><td>Info 3</td><td>Data field 9: </td><td>Info 10</td></tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default CustomerView;