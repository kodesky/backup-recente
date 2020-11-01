import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;

  .logo {
    max-height: 40px;
  }

  ul.nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    button {
      padding: 8px 15px;
      font-size: 16px;
      cursor: pointer;

      &.join {
        background: var(--primary);
        color: #fff;
        border-radius: 3px;
        transition: all ease 0.3s;
      }

      &.theme-mode {
        background: #fff;
        color: #000;
        height: 40px;
        width: 40px;
        border-radius: 40px;
        text-align: center;
        padding: 0;
        line-height: 46px;
        transition: all ease 0.3s;
      }
    }

    li {
      margin-left: 20px;

      a {
        color: ${({ theme }) => theme.color};
      }
    }

    li.language {
      position: relative;

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        border-radius: 3px;
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.secondaryColor};

        img {
          margin-right: 5px;
          border-radius: 3px;
        }
      }

      ul {
        position: absolute;
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        background: ${({ theme }) => theme.secondary};
        color: ${({ theme }) => theme.secondaryColor};
        width: 130px;
        padding: 8px;
        border-radius: 5px;

        li {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin: 0;
          padding: 5px 10px;
          cursor: pointer;

          img {
            margin-right: 5px;
            border-radius: 3px;
          }
        }
      }
    }
  }
`;

export default {};
