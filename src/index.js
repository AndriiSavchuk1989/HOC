import React from "react";
import ReactDOM from "react-dom";
import Enhancer from './Enhancer';
import ButtonComponent from './Button.component';

import "./styles.css";

//const EnhancedButton = Enhancer(Button);
const EnhancedButton = Enhancer(ButtonComponent);
const rootElement = document.getElementById("root");
ReactDOM.render(<EnhancedButton />, rootElement);
