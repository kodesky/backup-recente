import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
  will-change: transform, opacity;

  h1 {
    font-weight: 300;
    font-size: 33px;
  }

  input {
    width: 320px;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondaryColor};
    border-radius: 5px;
    padding: 15px;
  }

  button {
    background: #4bb543;
    width: 60px;
    height: 60px;
    line-height: 70px;
    border-radius: 60px;
    text-align: center;
    font-size: 36px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 10px;
  }

  a {
    color: ${({ theme }) => theme.color};
  }

  div.forgot {
    a {
      font-size: 18px;
    }
  }

  div.register {
    a {
      font-size: 12px;
    }
  }
`;

export default {};
