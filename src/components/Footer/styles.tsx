import styled from 'styled-components';

export const Container = styled.div`

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    margin-left: 100px;
    margin-top: 35px;
    color: #3e4246;

    width: 100%;
    max-width: 1220px;
    p {
      flex: 1;
    }
    a:first-child {
      color: #c00000;
    }
    a:last-child {
      color: #110a78;
      text-decoration-color: #110a78;
    }

    @media (max-width: 866px) {
      text-align: center;
      font-size: 12px;
      margin-top: 25px;
    }
  }
`;
