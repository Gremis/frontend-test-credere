import React from "react";
import {
  TitleListClients,
  CardContainer,
  TableMain,
  TableMainTr,
  TableMainTd,
} from "./Styled";

function Details(props) {
  console.log(props)
  return (
    <div>
      <TitleListClients>Detalhes de Cliente</TitleListClients>
      <CardContainer>
        <TableMain>
          <TableMainTr>
            <TableMainTd>Nome do Cliente</TableMainTd>
            <TableMainTd>{props.client.name}</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Data de Nascimento</TableMainTd>
            <TableMainTd>{props.client.birthday}</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Carteira de Motorista</TableMainTd>
            <TableMainTd>número</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Estado</TableMainTd>
            <TableMainTd>{props.client.state}</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Cidade</TableMainTd>
            <TableMainTd>{props.client.city}</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Telefones</TableMainTd>
            <TableMainTd>phone</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>E-mail</TableMainTd>
            <TableMainTd>e-mail</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>Responsável</TableMainTd>
            <TableMainTd>nome - (99)99999-9999</TableMainTd>
          </TableMainTr>
        </TableMain>
      </CardContainer>
    </div>
  );
}

export default Details;
