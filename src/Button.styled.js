import styled, { css } from 'styled-components';

const Button = {};

Button.Element = styled.button`
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`;

export default Button;