import React, { Component } from 'react';
import './info-bullet.css';

class InfoBullet extends Component {
    render() {
        return (
            <div className="infoBullet">
                <div className="container">
                    <h2 className="label">{this.props.label}</h2>
                    <h2 className="value">{this.props.value}</h2>
                </div>
            </div>
        );
    }
}

export default InfoBullet;
