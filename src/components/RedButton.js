import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  outline: none;
  background-color: white;
  border: solid 1px ${props => props.theme.main};
  margin: 3px;
  width: 100px;
  display: inline-flex;
  transform: skewX(-10deg);
  justify-content: center;
  color: ${props => props.theme.main};
  padding: 0.75em 0px;
  text-align: center;
  align-items: center;
  font-size: 16px;
  &:hover {
    background-color: ${props => props.theme.main};
    color: white;
  }
`;

export default class RedButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    return (
      <Button onClick={() => this.handleClick(this.props.value)}>
        {this.props.value}
      </Button>
    );
  }
}
