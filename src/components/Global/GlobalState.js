import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import index from "../../server/index.json";

const GlobalState = (props) => {
  const [clients, setClients] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = () => {
    setClients(index.customers);
  };

  const data = {
    clients,
    setClients,
    messages,
    setMessages,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
