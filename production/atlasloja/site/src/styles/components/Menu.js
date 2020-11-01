import styled from 'styled-components'

import logoSrc from '!/images/logo.png'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 25px 0;
`

export const Logo = styled.img.attrs({
  src: logoSrc,
  alt: 'Atlas Lojas - Logo'
})`
  width: 57px;
  margin-right: 45px;
`

export const Links = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  li {
    margin: 0 20px;

    a {
      color: #616161;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      transition: all ease 0.3s;

      &:hover {
        color: var(--primary);
      }
    }
  }
`

export const Buttons = styled.div`
  margin-left: auto;

  button {
    cursor: pointer;

    &:nth-child(1) {
      padding: 10px 20px;
      border-radius: 5px;
      background: var(--primary);
      color: #fff;
      margin-right: 15px;
      transition: all ease 0.3s;

      &:hover {
        box-shadow: 0 70px 45px -40px rgba(0, 0, 0, 0.1),
          0 10px 30px -5px rgba(0, 0, 0, 0.175);
      }
    }

    &:nth-child(2) {
      background: #fff;
    }
  }
`
