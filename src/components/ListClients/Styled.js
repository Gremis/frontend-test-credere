import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleListClients = styled.h1`
  text-align-last: center;
  @media (max-width: 415px) {
    font-size: 1rem;
  }
`;

export const ContainerButtons = styled.div`
  width: 100%;
  margin: 10px;
  text-align-last: center;
`;

export const ButtonController = styled.button`
  margin: 10px;
  border-radius: 6px;
  border: none;
  color: white;
  font-size: 0.8rem;
  background-color: #f52f00;
  padding: 10px;
  cursor: pointer;
  :hover {
    color: black;
    background-color: gray;
  }
  @media (max-width: 415px) {
    font-size: 0.7rem;
    padding: 6px;
  }
`;

export const TableMain = styled.table`
  font-size: 1.2rem;
  width: 70%;
  background: white;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
  @media (max-width: 415px) {
    font-size: 0.7rem;
    text-align: center;
  }
`;

export const TableMainTr = styled.tr`
  border: 1px solid black;
`;

export const TableMainTd = styled.td`
  color: rgba(100, 100, 100, 60);
  height: 30px;
  border: 0.5px solid gray;
`;

export const TableMainTdTitle = styled.td`
  background-color: #B98F8F;
  height: 35px;
  border-bottom: 1px solid rgb(210, 220, 250);
  color: black;
`;
