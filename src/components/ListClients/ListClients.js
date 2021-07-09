import React, { useState } from "react";
import Form from "../../components/Form/Form";
import Details from "../../components/Details/Details";
import {
  TitleListClients,
  CardContainer,
  TableMain,
  TableMainTr,
  TableMainTd,
  ContainerButtons,
  ButtonController,
} from "./Styled";

function ListClients(props) {
  const [showFormClient, setShowFormClient] = useState("start");

  const showForm = () => {
    setShowFormClient("add-client");
  };

  const showList = () => {
    setShowFormClient("start");
  };

  const showDetails = () => {
    setShowFormClient("show-client");
  };

  return (
    <>
      {showFormClient === "start" && (
        <>
          <TitleListClients>Lista de Clientes</TitleListClients>
          <CardContainer>
            <TableMain>
              <TableMainTr>
                <TableMainTd>Nome do Cliente</TableMainTd>
                <TableMainTd>Ações</TableMainTd>
              </TableMainTr>
              {props.listClients[0].map((client) => (
                <TableMainTr>
                  <TableMainTd>{client.name}</TableMainTd>
                  <TableMainTd>
                    <ContainerButtons>
                      <ButtonController onClick={showDetails}>
                        Mostrar Detalhes
                      </ButtonController>
                      <ButtonController>Editar</ButtonController>
                    </ContainerButtons>
                  </TableMainTd>
                </TableMainTr>
              ))}
            </TableMain>
          </CardContainer>
          <ContainerButtons>
            <ButtonController onClick={showForm}>
              Criar Novo Cliente
            </ButtonController>
          </ContainerButtons>
        </>
      )}
      {showFormClient === "add-client" && (
        <>
          <ContainerButtons>
            <ButtonController onClick={showList}>
              Voltar à lista de clientes
            </ButtonController>
          </ContainerButtons>
          <Form />
        </>
      )}
      {showFormClient === "show-client" && (
        <>
          <ContainerButtons>
            <ButtonController onClick={showList}>
              Voltar à lista de clientes
            </ButtonController>
          </ContainerButtons>
          <Details />
        </>
      )}
    </>
  );
}

export default ListClients;
