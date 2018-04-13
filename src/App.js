import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import Diamond from './components/diamond/diamond';
import InfoBullet from './components/info-bullet/info-bullet';

class App extends Component {

  constructor(props) {
    super(props);
    this.diamonds = [
      {
        "diamondID": 1234,
        "shape": "Round",
        "weight": 0.44,
        "color": "D",
        "Clarity": "VVS1",
        "price": "1400"
      },
      {
        "diamondID": 3467,
        "shape": "Round",
        "weight": 0.32,
        "color": "G",
        "Clarity": "VS1",
        "price": "3000"
      },
      {
        "diamondID": 8436,
        "shape": "Oval",
        "weight": 1.22,
        "color": "B",
        "Clarity": "IF",
        "price": "50000"
      }, {
        "diamondID": 2346,
        "shape": "Princess",
        "weight": 0.45,
        "color": "I",
        "Clarity": "VVS1",
        "price": "200"
      }, {
        "diamondID": 1347,
        "shape": "Round",
        "weight": 1.01,
        "color": "F",
        "Clarity": "IF",
        "price": "5000"
      }, {
        "diamondID": 8962,
        "shape": "Round",
        "weight": 0.98,
        "color": "E",
        "Clarity": "VS2",
        "price": "800"
      }, {
        "diamondID": 7512,
        "shape": "Princess",
        "weight": 2.03,
        "color": "H",
        "Clarity": "VS2",
        "price": "9000"
      }, {
        "diamondID": 5682,
        "shape": "Oval",
        "weight": 1.00,
        "color": "J",
        "Clarity": "VVS2",
        "price": "400"
      }, {
        "diamondID": 7283,
        "shape": "Emerald",
        "weight": 2.05,
        "color": "F",
        "Clarity": "VS1",
        "price": "450"
      }, {
        "diamondID": 7136,
        "shape": "Emerald",
        "weight": 1.00,
        "color": "G",
        "Clarity": "VS2",
        "price": "3467"
      }
    ]

    this.rows = [];
    for (let i = 0; i < this.diamonds.length; i++) {
      this.rows.push(<Diamond
        key={i}
        diamondID={this.diamonds[i].diamondID}
        shape={this.diamonds[i].shape}
        weight={this.diamonds[i].weight}
        color={this.diamonds[i].color}
        Clarity={this.diamonds[i].Clarity}
        price={this.diamonds[i].price}
      />);
    }
  }


  /* ========================================
    CALCULATE AVERAGE PRICE OF DIAMONDS
  ======================================== */
  get average() {
    if (!this.diamonds || this.diamonds.length === 0) return 0;

    let sum = 0;
    this.diamonds.forEach(diamond => {
      sum += parseInt(diamond.price, 10);
    });

    return sum / this.diamonds.length;
  }


  /* ========================================
    FIND THE MINIMUM PRICE OF DIAMONDS
  ======================================== */
  get minPrice() {
    if (!this.diamonds || this.diamonds.length === 0) return 0;

    return (this.diamonds.sort((a, b) => a.price - b.price))[0].price
  }


  render() {
    return (
      <div>
        <Header value="RAPAPORT DIAMONDS" />

        <div className="statistics">
          <InfoBullet label="Number of Diamonds:" value={this.diamonds.length} />
          {/* <span className="line"></span> */}
          <InfoBullet label="Average Price:" value={this.average} />
          {/* <span className="line"></span> */}
          <InfoBullet label="Minimum Price:" value={this.minPrice} />
        </div>
        <hr></hr>

        <div className="diamonds">
          {this.rows}
        </div>

      </div>
    );
  }
}

export default App;
