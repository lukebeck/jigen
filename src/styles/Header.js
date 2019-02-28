import React from 'react';
import styled from "styled-components";

const Logo = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin: 4rem;
  transform: skewX(-10deg);
  a {
    border-radius: 0px 0px 0px 0px;
    text-decoration: underline;
    padding: 0.5rem 1rem;
    background: ${props => props.theme.main};
    color: white;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  h2 {
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
        <a>Jigen</a>
        <h2> Kanji frequency analyser</h2>
      </Logo>
  </StyledHeader>
);

export default Header;
