import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import Jigen from './Jigen';
import logo from './lib/logo.svg';

const theme = {
  main: "crimson",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  font-family: sans-serif;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  h1 {
    color: ${props => props.theme.main};
  }
  h2 {
    transform: skewX(-10deg);
    font-size: 2rem;
    margin: 2rem 0 0 0;
    color: #4f4f4f;
  }
`;

const Img = styled.img`
    animation: App-logo-spin infinite 20s linear;
    height: 5vmin;
    pointer-events: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const Logo = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 4rem;
  transform: skewX(-10deg);
  span {
    border-radius: 0px 0px 0px 0px;
    text-decoration: underline;
    padding: 0.5rem 1rem;
    background: ${props => props.theme.main};
    color: white;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  p {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    margin: 2rem 0 0 0;

    color: #4f4f4f;
  }
`;

const StyledHeader = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

const Header = () => (
  <StyledHeader>
      <Logo>
        <span>Jigen</span>
        <p> Kanji frequency analyser</p>
      </Logo>
  </StyledHeader>
);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Inner>
            <Header />
            <Jigen/>
            <a href="https://github.com/lukebeck/jigen">
              <Img src={logo} className="App-logo" alt="logo" />
            </a>          
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default App;
