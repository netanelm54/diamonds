import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="header">{this.props.value}</h1>
                <hr></hr>
            </div>
        );
    }
}

export default Header;
