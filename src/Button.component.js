import React from 'react';
import Button from './Button.styled';

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <Button.Element primary onClick={this.props.handleClick}>Click me</Button.Element>
    )
  }
};

export default ButtonComponent;