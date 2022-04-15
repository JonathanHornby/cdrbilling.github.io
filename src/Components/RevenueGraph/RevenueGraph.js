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
            <img className="graphimage" src={graphexample}></img>
        )

    }
}

export default RevenueGraph;