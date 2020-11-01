import styled from 'styled-components'
import media from 'styled-media-query'

import { Container } from '..'

export const Content = styled.div`
  ${Container} {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${media.lessThan('medium')`
      flex-direction: column;
    `}
  }
`

export const Item = styled.div`
  width: 32%;
  padding: 40px;
  background: rgba(0, 0, 0, 0.2);
  height: 420px;
  border-radius: 8px;
  transition: all ease 0.3s;

  svg {
    font-size: 82px;
    color: #fff;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 32px;
    font-weight: 600;
    color: #fff;
    margin: 0;
  }

  p {
    margin: 20px 0 0 0;
    color: rgba(255, 255, 255, 0.6);
  }

  ${({ active }) =>
    active &&
    `
    margin-top: -20px;
    background: -webkit-linear-gradient(145deg, #f81f01 0%, #ee076e 100%);
    background: -webkit-linear-gradient(305deg, #f81f01 0%, #ee076e 100%);
    background: -o-linear-gradient(305deg, #f81f01 0%, #ee076e 100%);
    background: linear-gradient(145deg, #f81f01 0%, #ee076e 100%);

    p {
      color: #fff;
    }
  `}

  ${media.lessThan('medium')`
    height: auto;
    margin-bottom: 25px;
    width: 100%;

    ${({ active }) =>
      active &&
      `
      margin-top: 0px;
    `}
  `}
`
