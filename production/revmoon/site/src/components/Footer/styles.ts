import styled from 'styled-components';

export const Container = styled.div`
  flex-shrink: 0;
  padding: 30px 15px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondaryColor};

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export default {};
