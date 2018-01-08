import React, { Component } from 'react';
// import Image from 'react-native';
import CardHeader from './CardHeader';
// 3-5
//this.props.city.list[0].weather[0].icon}
export default class Card extends Component{
  state = {
    isOpen: true,
  };
  static propTypes={

  };

  render(){
    var re = /\d+/g;
    var found = `${this.props.data.weather[0].icon}`.match(re);
    var imgsrc = require(`../img/${found}.svg`);
    return(
      <div>
        <img src={imgsrc} alt='weather' />
      </div>
    );
  }
}
