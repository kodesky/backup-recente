import styled from 'styled-components'

import { Container as Button } from '../components/Button'

export const Page = styled.div`
  min-height: 100vh;
  background: var(--primary);
`

export const Grid = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Col = styled.div`
  width: 520px;
  margin: 0 15px;

  ${({ left }) =>
    left &&
    `
    img {
      max-width: 90px;
    }

    width: 580px;

    h1 {
      margin-top: 65px;
      font-size: 58px;
      line-height: 60px;
      font-weight: 500;
      color: #fff;
    }
  `}
`

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 60px;
  box-shadow: 0 70px 45px -40px rgba(0, 0, 0, 0.08),
    0 10px 30px -5px rgba(0, 0, 0, 0.1);

  a {
    text-decoration: none;
    color: #000;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -20px;

  ${Button} {
    width: 49% !important;
  }
`

export const Divider = styled.div`
  margin: 20px 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  height: 2px;
  border-radius: 2px;
`
