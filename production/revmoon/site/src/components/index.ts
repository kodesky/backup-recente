import styled, { createGlobalStyle } from 'styled-components';

export const Styles = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    min-height: 100vh;
    font-family: 'Open Sans', sans-serif;
    transition: all ease .3s;
    overflow-x: hidden;
  }

  body {
    display: flex;
    flex-direction: column;
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color};
  }

  *:focus {
    outline: none;
  }

  :root {
    --primary: #2196F3
  }
`;

export const Wrapper = styled.div`
  max-width: 1127px;
  margin: 0 auto !important;
  flex: 1 0 auto;
`;
