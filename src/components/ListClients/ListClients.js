import React, { useState } from "react";
import Form from "../../components/Form/Form";

function ListClients(props) {
  const [showFormClient, setShowFormClient] = useState("start");

  const showForm = () => {
    setShowFormClient("add-trip");
  };
  return (
    <>
      <div>
        {props.listClients[0].map((client) => (
          <div>
            <h2>{client.name}</h2>
            <button>Mostrar Detalhes</button>
            <button>Editar</button>
          </div>
        ))}
      </div>{" "}
      <div>
        {showFormClient === "start" && (
          <>
            <button onClick={showForm}>Criar Novo Cliente</button>
          </>
        )}

        {showFormClient === "add-trip" && <Form />}
      </div>
    </>
  );
}

export default ListClients;
