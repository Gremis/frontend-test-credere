import React, { useState, useContext } from "react";
import GlobalStateContext from "../../components/Global/GlobalStateContext";
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
  const { clients, setClients } = useContext(GlobalStateContext);
  const [phoneClient, setPhoneClient] = useState([]);
  const [emailClient, setEmailClient] = useState([]);
  const [dateClient, setDateClient] = useState({});
  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [parent, setParent] = useState({});
  const [clientId, setClientId] = useState(0);
  const [newClient, setnewClient] = useState([]);

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
    let name = event.target.name.split("_");
    if (name[0] !== "emails" && name[0] !== "phones" && name[0] !== "parent") {
      setDateClient({
        ...dateClient,
        [event.target.name]: event.target.value,
      });
    } else {
      switch (name[0]) {
        case "phones":
          saveNewPhoneValue(name, event.target.value);
          break;
        case "emails":
          emails[name[2]] = { id: name[2], address: event.target.value };
          setEmails(emails);
          break;
        default:
          saveParent(event.target.name, event.target.value);
          break;
      }
    }
  };

  const saveNewPhoneValue = (field, value) => {
    let index = field[2];
    let name = field[1];
    if (name === "code") {
      phones[index] = { id: index, code: value };
    } else if (name === "number") {
      phones[index].number = value;
      setPhones(phones);
    } else {
      let values = value.split("_");
      let i = values[2];
      phones[i].parameter = value;
      setPhones(phones);
    }
  };

  const saveParent = (field, value) => {
    let data = field.split("_");
    if (data[1] === "name") {
      setParent({ id: 0, name: value });
    } else {
      if (data[2] === "code") {
        parent.phone = { id: 0, code: value };
        setParent(parent);
      } else if (data[2] === "number") {
        parent.phone.number = value;
        setParent(parent);
      }
    }
  };

  const onClickCreate = (event) => {
    event.preventDefault();
    let formData = dateClient;
    formData.id = clientId;
    formData.phones = [...phones];
    formData.emails = [...emails];
    formData.parent = parent;
    if (clientId === 0) {
      setClientId(clientId + 1);
    }
    setClients([...clients, formData]);
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
                name="phones_code_0"
                onChange={handleInputChange}
                required
              />
              <InputForm
                placeholder={"número"}
                name="phones_number_0"
                onChange={handleInputChange}
                required
              />
              <InputForm
                type="radio"
                value="phones_principal_0"
                name="phones_principal"
                onChange={handleInputChange}
              />{" "}
              Principal
              <ButtonRemove>remover</ButtonRemove>
            </>
          ) : (
            <>
              <InputFormDd
                placeholder={"dd"}
                name={"phones_code_0"}
                onChange={handleInputChange}
                required
              />
              <InputForm
                placeholder={"número"}
                name={"phones_number_0"}
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
                  name={"phones_code_" + index}
                  onChange={handleInputChange}
                  required
                />
                <InputForm
                  placeholder={"número"}
                  name={"phones_number_" + index}
                  onChange={handleInputChange}
                  required
                />
                <InputForm
                  type="radio"
                  value={"phones_principal_" + index}
                  name="phones_principal"
                  onChange={handleInputChange}
                />{" "}
                Principal
                <ButtonRemove onClick={() => handleRemovePhone(index)}>
                  remover
                </ButtonRemove>
              </ListDatesLi>
            ))}
          </ListDatesUl>
          <ButtonAdd onClick={() => handleAddNewPhone()}>
            adicionar mais
          </ButtonAdd>
          <h2>E-mails</h2>
          <InputForm
            placeholder={"email@exemplo.com"}
            name={"emails_address_0"}
            onChange={handleInputChange}
            required
          />
          <ButtonRemove>remover</ButtonRemove>
          <ListDatesUl>
            {emailClient.map((index) => (
              <ListDatesLi key={index}>
                <InputForm
                  placeholder={"email@exemplo.com"}
                  name={"emails_address_" + index}
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
            name={"parent_name"}
            onChange={handleInputChange}
            required
          />
          <h4>Telefone</h4>
          <InputFormDd
            placeholder={"dd"}
            name={"parent_phone_code"}
            onChange={handleInputChange}
            required
          />
          <InputForm
            placeholder={"número"}
            name={"parent_phone_number"}
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
