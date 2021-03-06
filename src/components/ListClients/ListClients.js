import React, { useState, useContext } from "react";
import GlobalStateContext from "../../components/Global/GlobalStateContext";
import Form from "../../components/Form/Form";
import Details from "../../components/Details/Details";
import {
  TitleListClients,
  CardContainer,
  TableMain,
  TableMainTr,
  TableMainTd,
  TableMainTdTitle,
  ContainerButtons,
  ButtonController,
} from "./Styled";

function ListClients() {
  const [showFormClient, setShowFormClient] = useState("start");
  const { clients } = useContext(GlobalStateContext);
  const [showClient, setShowClient] = useState({});

  const showForm = () => {
    setShowFormClient("add-client");
  };

  const showList = () => {
    setShowFormClient("start");
  };

  const showDetails = (client) => {
    setShowClient(client);
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
                <TableMainTdTitle>Nome do Cliente</TableMainTdTitle>
                <TableMainTdTitle>Ações</TableMainTdTitle>
              </TableMainTr>
              {clients.map((client) => (
                <TableMainTr key={client.id}>
                  <TableMainTd>{client.name}</TableMainTd>
                  <TableMainTd>
                    <ContainerButtons>
                      <ButtonController onClick={() => showDetails(client)}>
                        Mostrar Detalhes
                      </ButtonController>
                      <ButtonController onClick={() => showForm(client)}>Editar</ButtonController>
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
          <Form client={showClient} key={showClient.id} />
        </>
      )}
      {showFormClient === "show-client" && (
        <>
          <ContainerButtons>
            <ButtonController onClick={showList}>
              Voltar à lista de clientes
            </ButtonController>
          </ContainerButtons>
          <Details client={showClient} key={showClient.id} />
        </>
      )}
    </>
  );
}

export default ListClients;
