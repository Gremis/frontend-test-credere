import React from "react";
import {
  TitleListClients,
  CardContainer,
  TableMain,
  TableMainTr,
  TableMainTd,
} from "./Styled";

function Details() {
  return (
    <div>
      <TitleListClients>Detalhes de Cliente</TitleListClients>
      <CardContainer>
        <TableMain>
          <TableMainTr>
            <TableMainTd>Nome do Cliente</TableMainTd>
            <TableMainTd>Enzo dos Santos</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Data de Nascimento</TableMainTd>
            <TableMainTd>31/12/1991</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Carteira de Motorista</TableMainTd>
            <TableMainTd>642123 - 31/12/2017</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Estado</TableMainTd>
            <TableMainTd>RN</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Cidade</TableMainTd>
            <TableMainTd>Natal</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Telefone Principal</TableMainTd>
            <TableMainTd>(99)99999-9999</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>E-mail</TableMainTd>
            <TableMainTd>enzo@dos-sant.os</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Responsável</TableMainTd>
            <TableMainTd>Paizão do Segundo - (99)99999-9999</TableMainTd>
          </TableMainTr>
        </TableMain>
      </CardContainer>
    </div>
  );
}

export default Details;
