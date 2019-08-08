import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import "./index.less";

@withRouter
class Button extends Component {
  constructor (props) {
    super(props);
    this.state = {
      startX: '',
      startY: '',
      isOn : false
    }
  }
  start = (e) => {
    e = window.event || e;
    this.setState({
      isOn : true,
      startX : e.changedTouches[0].clientX,
      startY : e.changedTouches[0].clientY
    });
  };
  end = (to,e) => {
    e = window.event || e;
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    this.setState({
      isOn : false
    });
    if(to&&typeof(to) !=="undefined") {
      if(Math.abs(endX - this.state.startX)<60 && Math.abs(endY - this.state.startY)<60) {
        this.props.history.push(to);
      }
    }
  };
  render () {
    const { isOn } = this.state;
    const { text,icon,to,className } = this.props;
    return (
      <div className={isOn?'Button active '+(!!className?className:''):'Button '+(!!className?className:'')} onTouchStart={this.start} onTouchEnd={()=>this.end(to)}>
        <i className={icon?'iconfont':'hide'} dangerouslySetInnerHTML={{__html:icon}} />
        <span>{text}</span>
      </div>
    );
  }
}

export default Button;
