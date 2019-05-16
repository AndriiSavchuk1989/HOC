import React from 'react';

const Enhancer = (Component) => {
  class _Enhancer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {value: 'State value'};
      this.state.handleClick = this.handleClick.bind(this);
      this.state.handleMouseOver = this.handleMouseOver.bind(this)
    }

    handleClick = (event) => {
      console.log(event.target.innerText);
    };

    handleMouseOver = (event) => {
      console.log('Mouse over me')
    }

    render () {
      console.log(this.state);
      return <Component {...this.state} />
    }
  }
  _Enhancer.displayName = 'Enhancer Component';
  return _Enhancer;
};

export default Enhancer;