import React, {Component} from 'react';
import CounterButton from '../CounterButton/CounterButton';

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }
  
  render() {
    return (
      <div>
        <CounterButton color={'red'} />
        <h1 className='f1'>Robo Friends</h1>
      </div>
    );
  };
}

export default Header;