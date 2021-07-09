import React, { useState } from "react";
import {
  ContainerForm,
  ContainerFormDetails,
  ListDatesUl,
  ListDatesLi,
  ButtonRemove,
  ButtonAdd,
  ButtonAddClient,
  InputForm,
  InputFormDd,
} from "./Styled";

const Form = () => {
  const [phoneClient, setPhoneClient] = useState([]);
  const [emailClient, setEmailClient] = useState([]);
  const [dateClient, setDateClient] = useState({
    name: "",
    birthday: "",
    state: "",
    phones: [
      {
        code: "",
        number: "",
      },
    ],
    emails: [
      {
        address: "",
      },
    ],
    parent: {
      name: "",
      phone: {
        code: "",
        number: "",
      },
    },
  });

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

  const handleInputChange = (event) => {
    setDateClient({
      ...dateClient,
      [event.target.name]: event.target.value,
    });
  };

  const onClickCreate = (event) => {
    event.preventDefault();
    console.log(dateClient);
  };

  return (
    <ContainerForm>
      <form onSubmit={onClickCreate}>
        <ContainerFormDetails>
          <h1>Cliente</h1>
          <h4>Nome</h4>
          <InputForm
            placeholder={"Nome do Cliente"}
            name={"name"}
            onChange={handleInputChange}
            required
          />
          <h4>Data de nascimento</h4>
          <InputForm
            placeholder={"dd/mm/aaaa"}
            name={"birthday"}
            onChange={handleInputChange}
            type={"date"}
            required
          />
          <h4>Carteira de motorista</h4>
          <InputForm
            placeholder={"12345678"}
            name={"number"}
            onChange={handleInputChange}
            required
          />
          <InputForm
            placeholder={"dd/mm/aaaa"}
            name={"issued_at"}
            onChange={handleInputChange}
            type={"date"}
            required
          />
          <h4>Estado</h4>
          <InputForm
            placeholder={"Estado de nascimento"}
            name={"state"}
            onChange={handleInputChange}
            required
          />
          <h4>Cidade</h4>
          <InputForm
            placeholder={"Cidade de nascimento"}
            name={"city"}
            onChange={handleInputChange}
            required
          />
          <h2>Telefones</h2>
          {phoneClient.length >= 1 ? (
            <>
              <InputFormDd
                placeholder={"dd"}
                name="phones"
                onChange={handleInputChange}
                required
              />
              <InputForm
                placeholder={"número"}
                name="number"
                onChange={handleInputChange}
                required
              />
              <InputForm
                type="radio"
                value="Principal"
                name="principal"
                onChange={handleInputChange}
              />{" "}
              Principal
              <ButtonRemove>remover</ButtonRemove>
            </>
          ) : (
            <>
              <InputFormDd
                placeholder={"dd"}
                name={"code"}
                onChange={handleInputChange}
                required
              />
              <InputForm
                placeholder={"número"}
                name={"number"}
                onChange={handleInputChange}
                required
              />
              <ButtonRemove>remover</ButtonRemove>
            </>
          )}
          <ListDatesUl>
            {phoneClient.map((index) => (
              <ListDatesLi key={index}>
                <InputFormDd
                  placeholder={"dd"}
                  name={"code"}
                  onChange={handleInputChange}
                  required
                />
                <InputForm
                  placeholder={"número"}
                  name={"number"}
                  onChange={handleInputChange}
                  required
                />
                <InputForm
                  type="radio"
                  value="Principal"
                  name="principal"
                  onChange={handleInputChange}
                />{" "}
                Principal
                <ButtonRemove onClick={() => handleRemovePhone(index)}>
                  remover
                </ButtonRemove>
              </ListDatesLi>
            ))}
          </ListDatesUl>
          <ButtonAdd onClick={handleAddNewPhone}>adicionar mais</ButtonAdd>
          <h2>E-mails</h2>
          <InputForm
            placeholder={"email@exemplo.com"}
            name={"address"}
            onChange={handleInputChange}
            required
          />
          <ButtonRemove>remover</ButtonRemove>
          <ListDatesUl>
            {emailClient.map((index) => (
              <ListDatesLi key={index}>
                <InputForm
                  placeholder={"email@exemplo.com"}
                  name={"address"}
                  onChange={handleInputChange}
                  required
                />
                <ButtonRemove onClick={() => handleRemoveEmail(index)}>
                  remover
                </ButtonRemove>
              </ListDatesLi>
            ))}
          </ListDatesUl>
          <ButtonAdd onClick={handleAddNewEmail}>adicionar mais</ButtonAdd>
          <h2>Responsável</h2>
          <h4>Nome</h4>
          <InputForm
            placeholder={"Responsável"}
            name={"name"}
            onChange={handleInputChange}
            required
          />
          <h4>Telefone</h4>
          <InputFormDd
            placeholder={"dd"}
            name={"code"}
            onChange={handleInputChange}
            required
          />
          <InputForm
            placeholder={"número"}
            name={"number"}
            onChange={handleInputChange}
            required
          />{" "}
        </ContainerFormDetails>
        <ButtonAddClient type={"submit"}>Salvar Cliente</ButtonAddClient>
      </form>
    </ContainerForm>
  );
};

export default Form;
