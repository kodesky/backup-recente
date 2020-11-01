import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 650px;
  overflow-x: hidden;
`

export const H1 = styled.h1`
  color: #4a4a4a;
  font-size: 62px;
  line-height: 66px;
  font-weight: 900;
  margin-bottom: 20px;
`

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 25px;
`

export const Button = styled.button`
  position: relative;
  z-index: 999;
  padding: 18px 29px;
  border-radius: 8px;
  background: #008dce;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 70px 45px -40px rgb(0, 141, 206, 0.3),
    0 10px 30px -5px rgb(0, 141, 206, 0.375);
`

export const Scroller = styled.div`
  margin-top: 45px;

  img {
    width: 35px;
  }
`

export const Renders = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  img:nth-child(1) {
    position: absolute;
    right: -420px;
    top: -50px;
    max-width: 820px;
  }

  img:nth-child(2) {
    position: absolute;
    max-width: 820px;
    right: -120px;
    top: 50px;
    transform: rotate(-8deg);
  }
`
