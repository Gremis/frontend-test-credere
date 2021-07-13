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

export const TableMain = styled.table`
  font-size: 1.2rem;
  width: 70%;
  background: white;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
  font-weight: bold;
  @media (max-width: 415px) {
    font-size: 0.7rem;
    text-align: center;
  }
`;

export const TableMainTr = styled.tr`
  :hover {
    background-color: #d5baad;
  }
`;

export const TableMainTd = styled.td`
  color: rgba(100, 100, 100, 60);
  height: 30px;
  border: 0.5px solid gray;
`;

export const TableMainTdTitle = styled.td`
  background-color: #b98f8f;
  height: 35px;
  border-bottom: 1px solid rgb(210, 220, 250);
  color: black;
`;
