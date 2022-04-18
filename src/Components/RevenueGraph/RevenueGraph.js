import React from 'react';
import './RevenueGraph.css';
import graphexample from './pictures/graphexample.png';


// RevenueGraph

class RevenueGraph extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <img className="graphimage" src={graphexample}></img>
                <p>This will graph the last 3 months revenue for the Customer or User</p>
            </div>
        )

    }
}

export default RevenueGraph;