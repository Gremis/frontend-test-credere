import styled from "styled-components";

export const ContainerForm = styled.div `
  padding: 10px;
  font-size: 1.2rem;
`;

export const ContainerFormDetails = styled.div `
  line-height: 20px;
`;

export const SelectOptions = styled.select `
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
`;

export const InputForm = styled.input `
  width: 12%;
  padding: 5px 10px;
  display: inline-block;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  ::placeholder {
    font-style: italic;
    font-size: 0.8rem;
    color: #c6c7c5;
    font-weight: bold;
  }
  &[type="radio"] {
    margin: -80px;
  }
  @media (max-width: 415px) {
    width: 45%;
    &[type="radio"] {
      margin: -70px;
    }
  }
`;

export const InputFormDd = styled.input `
  width: 5%;
  padding: 5px 10px;
  display: inline-block;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  ::placeholder {
    font-style: italic;
    font-size: 0.8rem;
    color: #c6c7c5;
    font-weight: bold;
  }
  @media (max-width: 415px) {
    width: 15%;
  }
`;

export const ButtonRemove = styled.button `
  background-color: white;
  border: none;
  color: #ad2737;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const ButtonAdd = styled.button `
  background-color: white;
  border: none;
  color: #0366d6;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const ButtonAddClient = styled.button `
  background-color: white;
  border: none;
  color: #0366d6;
  font-weight: bold;
  font-style: italic;
  text-decoration: underline;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 25px;
`;

export const ListDatesUl = styled.ul `
  margin-left: -41px;
  margin-top: -1px;
`;

export const ListDatesLi = styled.li `
  list-style: none;
`;