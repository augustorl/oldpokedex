import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  flex: 1;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  margin-left: 60px;
  align-content: center;
  align-items: center;
  height: 150px;
  img {
    margin: 0 10px;
    flex-shrink: none;
    flex-wrap: none;
    max-width: 200px;
  }

  form {
  font-size: 12px;
  width: 350px;
  margin-left: 50px;
  padding-right: 40px;
}
  

`;

export const Container = styled.div`
  img {
    max-width: 450px;
    padding-right: 130px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  form {
  font-size: 12px;
  margin-top: 19px;
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