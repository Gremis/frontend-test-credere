import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleListClients = styled.h1`
  text-align-last: center;
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
  background-color: #f52f00;
  padding: 10px;
  cursor: pointer;
  :hover {
    color: black;
    background-color: gray;
  }
`;

export const TableMain = styled.table`
  border: 1px solid black;
  font-size: 1.2rem;
  text-align-last: center;
  width: 70%;
`;

export const TableMainTr = styled.tr`
  border: 1px solid black;
`;

export const TableMainTd = styled.td`
  border: 1px solid black;
  background-color: white;
  font-weight: bold;
`;
