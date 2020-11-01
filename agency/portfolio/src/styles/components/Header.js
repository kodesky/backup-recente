import styled from 'styled-components'
import media from 'styled-media-query'

import { Container } from '..'

export const Content = styled.div`
  padding: 35px;

  ${Container} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    img {
      height: 65px;
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-left: auto;
      list-style: none;

      li {
        margin: 0 20px;

        a {
          color: #c6c9d8;
          cursor: none;
          text-decoration: none;
          font-weight: 600;
          font-size: 18px;
          transition: all ease 0.3s;

          &:hover {
            color: #f9004d;
          }
        }
      }
    }

    button {
      padding: 12px 24px;
      border-radius: 8px;
      color: #c6c9d8;
      border: solid 2px #c6c9d8;
      background: transparent;
      font-weight: 600;
      font-size: 18px;
      cursor: none;
      margin-left: 45px;
      transition: all ease 0.3s;
      &:hover {
        color: #000;
        background: #fff;
      }
    }
  }

  ${media.lessThan('medium')`
    padding-bottom: 0;
  `}
`
