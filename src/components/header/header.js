import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="header">{this.props.prime}</h1>
                <h3 className="second">{this.props.second}</h3>
                <hr></hr>
            </div>
        );
    }
}

export default Header;
