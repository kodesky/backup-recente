import styled from 'styled-components'
import media from 'styled-media-query'

import { Container } from '..'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;

  ${Container} {
    p {
      color: #686868;
      text-transform: uppercase;
      font-weight: 300;
    }

    h1 {
      font-size: 72px;
      font-weight: 900;
      text-transform: uppercase;
      line-height: 74px;
      color: #fff;
      margin: 25px 0;
    }

    h2 {
      font-size: 18px;
      line-height: 20px;
      font-weight: 400;
      color: #fff;
      margin: 0;
      margin-bottom: 45px;
    }

    form {
      position: relative;
      margin-right: 25px;

      input {
        width: 520px;
        padding: 20px;
        border-radius: 8px;
        color: #686868;
        background: rgba(0, 0, 0, 0.4);
        border: solid 2px transparent;
        transition: all ease 0.3s;

        &:hover,
        &:focus {
          border-color: #fff;
          color: #fff;
        }
      }

      button {
        position: absolute;
        top: 50%;
        right: 15px;
        padding: 5px 15px;
        transform: translateY(-50%);
        background: #fff;
        color: #000;
        font-weight: 600;
        font-size: 16px;
        border-radius: 8px;
        transition: all ease 0.3s;
        cursor: none;

        &:hover {
          background: linear-gradient(145deg, #f81f01 0%, #ee076e 100%);
          color: #fff;
          transform: translateY(-50%) scale(1.2);
        }
      }
    }

    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 15px 25px;
      border-radius: 8px;
      color: #000;
      font-size: 18px;
      background: #25d366;
      cursor: none;
      transition: all ease 0.3s;

      svg {
        margin-right: 20px;
        font-size: 26px;
      }

      &:hover {
        background: #fff;
      }
    }
  }

  ${media.lessThan('medium')`
    height: 60vh;

    ${Container} {
      padding: 0 45px;

      p {
        color: #686868;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 300;
      }

      h1 {
        font-size: 38px;
        line-height: 42px;
      }

      h2 {
        font-size: 14px;
        line-height: 16px;
      }
    }
  `}
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
