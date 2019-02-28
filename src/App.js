import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import Jigen from './Jigen';
import Header from './styles/Header';


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
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Header />
          <Inner><Jigen/></Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default App;
