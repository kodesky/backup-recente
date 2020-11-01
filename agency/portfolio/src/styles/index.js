import styled, { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'Raleway', sans-serif;
    overflow-x: hidden;
    overflow-y: hidden;
    cursor: none;
    background: #151515;

    ${media.lessThan('medium')`
      overflow-y: auto;
    `}
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
    padding: 0;

    &:focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
  }

  .cursor {
    pointer-events: none;

    .cursor__ball {
      position: fixed;
      top: 0;
      left: 0;
      mix-blend-mode: difference;
      z-index: 1000;

      circle {
        fill: #f7f8fa;
      }
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  }
`

export const Container = styled.div`
  position: relative;
  margin: 0 auto !important;
  width: 100%;
  max-width: 1427px;
`
