import React, { useState } from "react";
import {} from "./Styled";

const Form = () => {
  const [phoneClient, setPhoneClient] = useState([]);
  const [emailClient, setEmailClient] = useState([]);

  const handleAddNewPhone = () => {
    const newPhone = phoneClient.length > 0 ? phoneClient.slice(-1).pop() : 0;
    const newPhones = [...phoneClient, newPhone + 1];
    if (phoneClient.length <= 2) {
      setPhoneClient(newPhones);
    } else {
      alert("Máximo 4 telefones por cliente");
    }
  };

  const handleRemovePhone = (value) => {
    const newPhones = phoneClient.filter((index) => index !== value);
    setPhoneClient(newPhones);
  };

  const handleAddNewEmail = () => {
    const newEmail = emailClient.length > 0 ? emailClient.slice(-1).pop() : 0;
    const newEmails = [...emailClient, newEmail + 1];
    if (emailClient.length <= 1) {
      setEmailClient(newEmails);
    } else {
      alert("Máximo 3 e-mails por cliente");
    }
  };

  const handleRemoveEmail = (value) => {
    const newEmails = emailClient.filter((index) => index !== value);
    setEmailClient(newEmails);
  };

  const onClickCreate = (e) => {
    e.preventDefault();
    // createTrip(form, clear);
  };

  const today = new Date();
  const stringToday =
    today.getFullYear() +
    "-" +
    ("0" + (today.getMonth() + 1)).substr(-2) +
    "-" +
    ("0" + today.getDate()).substr(-2);

  return (
    <div>
      <h1>Criar Cliente</h1>
      <form onSubmit={onClickCreate}>
        <div>
          <h3>Cliente</h3>
          <p>Nome</p>
          <input
            placeholder={"Nome do Cliente"}
            name={"name"}
            pattern={"^.{5,}$"}
            title={"O nome da viagem deve ter no mínimo 5 caracteres"}
            required
          />
          <p>Data de nascimento</p>
          <input
            placeholder={"dd/mm/aaaa"}
            type={"date"}
            name={"date"}
            min={stringToday}
            required
          />
          <p>Carteira de motorista</p>
          <input placeholder={""} name={"description"} required />
          <input
            placeholder={"dd/mm/aaaa"}
            type={"date"}
            name={"date"}
            min={stringToday}
            required
          />
          <p>Estado</p>
          <input
            placeholder={"Estado de nascimento"}
            name={"description"}
            required
          />
          <p>Cidade</p>
          <input
            placeholder={"Cidade de nascimento"}
            name={"description"}
            required
          />
          <h3>Telefones</h3>
          {phoneClient.length >= 1 ? (
            <>
              <input placeholder={"dd"} name={"description"} required />
              <input placeholder={"número"} name={"description"} required />
              <input type="radio" value="Principal" name="principal" />{" "}
              Principal
              <button>remover</button>
            </>
          ) : (
            <>
              <input placeholder={"dd"} name={"description"} required />
              <input placeholder={"número"} name={"description"} required />
              <button>remover</button>
            </>
          )}

          <ul>
            {phoneClient.map((index) => (
              <li key={index}>
                <input placeholder={"dd"} name={"description"} required />
                <input placeholder={"número"} name={"description"} required />
                <input type="radio" value="Principal" name="principal" />{" "}
                Principal
                <button onClick={() => handleRemovePhone(index)}>
                  remover
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleAddNewPhone}>adicionar mais</button>
          <h3>E-mails</h3>
          <input
            placeholder={"email@exemplo.com"}
            name={"description"}
            required
          />
          <button>remover</button>
          <ul>
            {emailClient.map((index) => (
              <li key={index}>
                <input
                  placeholder={"email@exemplo.com"}
                  name={"description"}
                  required
                />
                <button onClick={() => handleRemoveEmail(index)}>
                  remover
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleAddNewEmail}>adicionar mais</button>
          <h3>Responsável</h3>
          <p>Nome</p>
          <input placeholder={""} name={"description"} required />
          <p>Telefone</p>
          <input placeholder={""} name={"description"} required />
        </div>
        <button type={"submit"}>Salvar Cliente</button>
      </form>
    </div>
  );
};

export default Form;
