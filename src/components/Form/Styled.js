import styled from "styled-components";

export const ContainerForm = styled.div`
  max-width: 400px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #b98f8f;
  border-radius: 8px;
  h1 {
    margin: 0 0 30px 0;
    text-align: center;
  }
`;

export const ContainerFormDetails = styled.div`
  line-height: 20px;
`;

export const SelectOptions = styled.select`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
`;

export const InputForm = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
  ::placeholder {
    font-style: italic;
    font-size: 0.8rem;
    color: #c6c7c5;
    font-weight: bold;
  }
  &[type="radio"] {
    margin: -165px;
  }
`;

export const InputFormPhone = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 40%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 15px;
  ::placeholder {
    font-style: italic;
    font-size: 0.8rem;
    color: #c6c7c5;
    font-weight: bold;
  }
`;

export const InputFormDd = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 23%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 15px;
  ::placeholder {
    font-style: italic;
    font-size: 0.8rem;
    color: #c6c7c5;
    font-weight: bold;
  }
`;

export const InputFormEmail = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 75%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
  ::placeholder {
    font-style: italic;
    font-size: 0.8rem;
    color: #c6c7c5;
    font-weight: bold;
  }
`;

export const ButtonRemove = styled.button`
  text-decoration: none;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: helvetica;
  font-weight: 300;
  font-size: 15px;
  font-style: italic;
  background-color: #ad2737;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  margin-bottom: 18px;
`;

export const ButtonAdd = styled.button`
  text-decoration: none;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: helvetica;
  font-weight: 300;
  font-size: 15px;
  font-style: italic;
  background-color: #0366d6;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  margin-bottom: 18px;
`;

export const ButtonAddClient = styled.button`
  padding: 19px 39px 18px 39px;
  color: #fff;
  background-color: #f52f00;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
`;

export const ListDatesUl = styled.ul`
  margin-left: -41px;
  margin-top: -1px;
`;

export const ListDatesLi = styled.li`
  list-style: none;
`;
