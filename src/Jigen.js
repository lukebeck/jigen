import React, { Component } from "react";
import styled from "styled-components";
import logo from './logo.svg';
import Data from "./lib/data.js";
import countInstances from "./lib/count.js";

export const Example = `Enter text here and get a visual frequency display from the kanji grid below.

私わたくしはその人を常に先生と呼んでいた。だからここでもただ先生と書くだけで本名は打ち明けない。これは世間を憚はばかる遠慮というよりも、その方が私にとって自然だからである。私はその人の記憶を呼び起すごとに、すぐ「先生」といいたくなる。筆を執とっても心持は同じ事である。よそよそしい頭文字かしらもじなどはとても使う気にならない。`;


// Styled Components

const Img = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 5vmin;
    pointer-events: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const KanjiBox = styled.div`
  line-height: 2.3;
  margin: 2rem 0;
  span {
    border-radius: 3px;
    padding: 6px 9px;
    margin: 0px 5px;
    font-size: 1rem;
    font-family: sans-serif;
    font-weight: 100;
    background: #fdfdfd;
  }

  .count-0 {
    background: #fdfdfd;
  }

  .count-1 {
    background: #209cee;
    color: white;
  }

  .count-2 {
    background: #3273dc;
    color: white;
  }

  .count-3 {
    background: #23d160;
    color: white;
  }

  .count-4 {
    background: #ffdd57;
  }

  .count-5 {
    background: #ff3860;
    color: white;
  }
`;

const Input = styled.div`
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

const Sub = styled.h2`
  transform: skewX(-10deg);
  font-size: 2rem;
  margin: 2rem 0 0 0;
  color: #4f4f4f;
`;

// Kanbun app elements
class KanjiList extends React.Component {
  render() {
    const input = this.props.input;
    const text = this.props.text;
    return (
      <KanjiBox>
        {input.map(post => (
          <span
            className={`count-${countInstances(post.Kanji, text)}`}
            key={post.id}
          >
            {post.Kanji}
          </span>
        ))}
      </KanjiBox>
    );
  }
}



class TextInput extends React.Component {
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
      <Input>
        <textarea value={text} onChange={this.handleChange} />
      </Input>
    );
  }
}

class SortButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    return (
      <Button
        className="sortButton"
        onClick={() => this.handleClick(this.props.value)}
      >
        {this.props.value}
      </Button>
    );
  }
}


class Kanbun extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      kanji: Data,
      text: Example,
      sort: "id"
    };
  }

  handleClick = param => {
    this.setState({
      sort: param,
      kanji: this.state.kanji.sort(
        (a, b) => a[param] - b[param] || a.Strokes - b.Strokes
      )
    });
  };

  handleTextChange(text) {
    this.setState({ text });
  }

  handleKanjiChange( kanji ) {
    this.setState({ kanji });
  }

  render() {
    const kanji = this.state.kanji;
    const text = this.state.text;

    return (
      <div className="App">
        <TextInput text={text} onTextChange={this.handleTextChange} />
        <Sub>Sort by:</Sub>
        <Input>
          <SortButton value="Strokes" onClick={this.handleClick} />
          <SortButton value="JLPT-test" onClick={this.handleClick} />
          <SortButton value="Grade" onClick={this.handleClick} />
          <SortButton value="id" onClick={this.handleClick} />
        </Input>
        <KanjiList text={text} input={kanji} />
        <Img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Kanbun;
