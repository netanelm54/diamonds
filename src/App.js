import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header';
import Diamond from './components/diamond/diamond';
import InfoBullet from './components/info-bullet/info-bullet';

const DATA = require('./data.json');  //The json file as a Data-Base

class App extends Component {

  constructor(props) {
    super(props);
    this.diamonds = DATA.diamonds
  }


  /* ========================================
    CALCULATE AVERAGE PRICE OF DIAMONDS
  ======================================== */
  get average() {
    if (this.diamonds.length === 0) return 0;

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
    if (this.diamonds.length === 0) return 0;
    return (this.diamonds.sort((a, b) => a.price - b.price))[0].price
  }


  /* ========================================
    GET ALL DIAMONDS IN LIST OF <Diamond />
  ======================================== */
  get diamondsList(){
    let list = [];
    for (let i = 0; i < this.diamonds.length; i++) {
      list.push(<Diamond
        key={i}
        diamondID={this.diamonds[i].diamondID}
        shape={this.diamonds[i].shape}
        weight={this.diamonds[i].weight}
        color={this.diamonds[i].color}
        Clarity={this.diamonds[i].Clarity}
        price={this.diamonds[i].price}
      />);
    }

    return list;
  }


  render() {
    if(!this.diamonds) return(<div>  </div>);

    return (
      <div>
        <Header prime="RAPAPORT DIAMONDS" second="Diamonds List 2018" />

        <div className="statistics">
          <InfoBullet label="Number of Diamonds:" value={this.diamonds.length} />
          <InfoBullet label="Average Price:" value={this.average + " $"} />
          <InfoBullet label="Minimum Price:" value={this.minPrice + " $"} />
        </div>
        <hr></hr>

        <div className="diamonds">
          {this.diamondsList}
        </div>

      </div>
    );
  }
}

export default App;
