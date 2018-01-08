import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class CardHeader extends Component{
  static propTypes={

  };

  render(){
    const Time =({time})=>(
      <span className='time'>{moment(time).format('dddd')}</span>
    )
    return(
      <div>
        <Time time={this.props.data.dt_txt}/>
        <span>
          {this.props.data.main.temp_min}° &#160;&#160;
          {this.props.data.main.temp_max}°
        </span>
      </div>
    )
  }
}
