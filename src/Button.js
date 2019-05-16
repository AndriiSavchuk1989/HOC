import React from 'react';

class Button extends React.Component {
  render () {
    return <button onClick={this.props.handleClick} onMouseOver={this.props.handleMouseOver}>Red button</button>
  }
}

export default Button;

