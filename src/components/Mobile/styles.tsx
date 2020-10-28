import styled from 'styled-components';
import mobilebg from '../../assets/mobile.png';

export const Container = styled.div`
  display: flex;
  background: url(${mobilebg}) no-repeat;
  flex: 1;
  height: 100vh;
  width: 100vw;

  h1 {
      margin-top: 425px;
      padding:  50px;
      font-size: 20px;
      color: #eed535;
  }
`;
