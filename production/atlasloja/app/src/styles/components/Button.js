import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 20px 15px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  margin: 15px 0;
  cursor: pointer;

  background: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};

  &:hover {
    opacity: 0.8;
  }
`
