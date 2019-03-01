import React, { Component } from "react";
import styled from "styled-components";

const InputField = styled.div`
  display: flex;
  justify-content: center;
  textarea {
    font-weight: 100;
    line-height: 1.6;
    margin: 0 15px;
    width: 600px;
    padding: 15px;
    height: 300px;
    border: 1px solid ${props => props.theme.grey};
    background-color: white;
    font-size: 1rem;
    resize: none;
  }
  textarea:focus {
    outline: none;
    border: 3px solid ${props => props.theme.main};
    box-shadow: 0 0 1rem 0 ${props => props.theme.main};
  }
`;

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTextChange(e.target.value);
  }
  render() {
    const text = this.props.text;
    return (
      <InputField>
        <textarea value={text} onChange={this.handleChange} />
      </InputField>
    );
  }
}
