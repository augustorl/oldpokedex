import styled from 'styled-components';

export const Container = styled.div`
  img {
    max-width: 550px;
    padding-right: 50px;
  }
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  form {
  margin-top: 39px;
  width: 500px;
  padding-right: 40px;
}
`;

export const FormContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;


input {
  color: #5F6368;
}

button {
  max-width: 80px;
  margin-bottom: 20px;
  margin-left: 20px;
}
`;