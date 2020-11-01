import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Left = styled.div`
  position: absolute;
  top: 35px;
  left: 15px;
  transform: translateY(-50%);
  font-size: 26px;
  line-height: 26px;
  color: #151515;
`

export const Right = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  transform: translateY(-50%);

  button {
    background: transparent;
    cursor: pointer;
    font-size: 26px;
    line-height: 26px;
    color: #686868;
    transition: all ease 0.3s;

    &:hover {
      color: #151515;
    }
  }
`

export const TextInput = styled.input`
  width: 100%;
  padding: 20px 25px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.05);
  transition: all ease 0.3s;
  border: solid transparent 3px;
  border-radius: 5px;
  margin-bottom: 15px;

  ${({ hasLeft }) => hasLeft && `padding-left: 55px`};
  ${({ hasRight }) => hasRight && `padding-right: 55px`};

  &:hover,
  &:focus {
    outline: none;
    border-color: #151515;
  }
`
