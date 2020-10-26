import styled from 'styled-components';


export const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 600px;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  margin-left: 275px;
  align-content: center;
  align-items: center;
  height: 80px;
  flex: 1;
  img {
    margin: 0 10px;
    flex-shrink: none;
    flex-wrap: none;
    max-width: 180px;
  }

  form {
  font-size: 12px;
  width: 350px;
  margin-left: 50px;
  padding-right: 40px;
  
  input {
    height: 14px;
  }
  button {
    height: 45px;
  }
  svg {
    display: none;
  }
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
  @media (min-width: 1500px) {
      margin-top: 300px;
  }
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

export const Pokedex = styled.div`
  margin-right: 400px;
  
`;