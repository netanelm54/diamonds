import React, { Component } from 'react';
import './diamond.css';

class Diamond extends Component {
    render() {
        return (
            <div className="diamond">
                <p>
                    <span className="label"> Diamond ID: </span>
                    <span className="value"> {this.props.diamondID} </span> <br></br>
                </p>
                <p>
                    <span className="label"> Shape: </span>
                    <span className="value"> {this.props.shape} </span> <br></br>
                </p>
                <p>
                    <span className="label"> Weight: </span>
                    <span className="value"> {this.props.weight} </span> <br></br>
                </p>
                <p>
                    <span className="label"> Color: </span>
                    <span className="value"> {this.props.color} </span> <br></br>
                </p>
                <p>
                    <span className="label"> Clarity: </span>
                    <span className="value"> {this.props.Clarity} </span> <br></br>
                </p>
                <p>
                    <span className="label"> Price: </span>
                    <span className="value"> {this.props.price}$ </span> 
                </p>
            </div>
        );
    }
}

export default Diamond;
