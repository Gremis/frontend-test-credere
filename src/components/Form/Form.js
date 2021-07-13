import React, { useState, useContext } from "react";
import GlobalStateContext from "../../components/Global/GlobalStateContext";
import { states } from "../../constants/states";
import {
  ContainerForm,
  ContainerFormDetails,
  SelectOptions,
  ListDatesUl,
  ListDatesLi,
  ButtonRemove,
  InputFormPhone,
  InputFormEmail,
  ButtonAdd,
  ButtonAddClient,
  InputForm,
  InputFormDd,
} from "./Styled";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Form = () => {
  const { clients, setClients } = useContext(GlobalStateContext);
  const [inputPhoneRow, setInputPhoneRow] = useState([]);
  const [inputEmailRow, setInputEmailRow] = useState([]);
  const [dateClient, setDateClient] = useState({});
  const [driverLicense, setDriverLicense] = useState({});
  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [parent, setParent] = useState({});
  const [clientId, setClientId] = useState(0);
  const [isAdult, setIsAdult] = useState(false);

  const handleAddNewPhone = () => {
    const newPhone =
      inputPhoneRow.length > 0 ? inputPhoneRow.slice(-1).pop() : 0;
    const newPhones = [...inputPhoneRow, newPhone + 1];
    if (inputPhoneRow.length <= 2) {
      setInputPhoneRow(newPhones);
    } else {
      alert("Máximo 4 telefones por cliente");
    }
  };

  const handleRemovePhone = (value) => {
    const newPhones = inputPhoneRow.filter((index) => index !== value);
    setInputPhoneRow(newPhones);
  };

  const handleAddNewEmail = () => {
    const newEmail =
      inputEmailRow.length > 0 ? inputEmailRow.slice(-1).pop() : 0;
    const newEmails = [...inputEmailRow, newEmail + 1];
    if (inputEmailRow.length <= 1) {
      setInputEmailRow(newEmails);
    } else {
      alert("Máximo 3 e-mails por cliente");
    }
  };

  const handleRemoveEmail = (value) => {
    const newEmails = inputEmailRow.filter((index) => index !== value);
    setInputEmailRow(newEmails);
  };

  const handleInputChange = (event) => {
    let name = event.target.name.split("_");
    if (
      name[0] !== "driver" &&
      name[0] !== "emails" &&
      name[0] !== "phones" &&
      name[0] !== "parent"
    ) {
      if (name[0] === "birthday") {
        ageValidation(event.target.value);
      }

      setDateClient({
        ...dateClient,
        [event.target.name]: event.target.value,
      });
    } else {
      switch (name[0]) {
        case "driver":
          saveLicense(event.target.name, event.target.value);
          break;
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

  const saveLicense = (field, value) => {
    let data = field.split("_");
    if (data[2] === "number") {
      setDriverLicense({ id: 0, number: value });
    } else {
      driverLicense.issued_at = value;
      setDriverLicense(driverLicense);
    }
  };

  const ageValidation = (birthday) => {
    const today = new Date();
    const birthdayAge = new Date(birthday);
    let age = today.getFullYear() - birthdayAge.getFullYear();
    const m = today.getMonth() - birthdayAge.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthdayAge.getDate())) {
      age--;
    }

    if (age >= 18) {
      setIsAdult(true);
    } else {
      setIsAdult(false);
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

  const MySwal = withReactContent(Swal);

  const onClickCreate = (event) => {
    event.preventDefault();
    let formData = dateClient;
    formData.id = clientId;
    formData.driver_license = driverLicense;
    formData.phones = [...phones];
    formData.emails = [...emails];
    formData.parent = parent;
    if (clientId === 0) {
      setClientId(clientId + 1);
    }
    setClients([...clients, formData]);
    MySwal.fire(
      "Usuário criado com sucesso!",
      "Volte à lista de clientes para ver mais detalhes!",
      "success"
    );
    event.target.reset();
  };

  return (
    <ContainerForm>
      <form onSubmit={onClickCreate}>
        <ContainerFormDetails>
          <h1> Cliente </h1>
          <h4> Nome </h4>{" "}
          <InputForm
            placeholder={"Nome do Cliente"}
            name={"name"}
            onChange={handleInputChange}
            title="Nome aceita somente letras e espaços em branco"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            required
          />
          <h4> Data de nascimento </h4>{" "}
          <InputForm
            placeholder={"dd/mm/aaaa"}
            name={"birthday"}
            onChange={handleInputChange}
            type={"date"}
            required
          />{" "}
          {isAdult ? (
            <>
              <h4> Carteira de motorista </h4>{" "}
              <InputForm
                placeholder={"12345678"}
                name="driver_license_number"
                onChange={handleInputChange}
                required
              />
              <InputForm
                placeholder={"dd/mm/aaaa"}
                name="driver_license_issued_at"
                onChange={handleInputChange}
                type={"date"}
                required
              />
            </>
          ) : (
            ""
          )}{" "}
          <h4> Estado </h4>{" "}
          <SelectOptions name={"state"} onChange={handleInputChange} required>
            <option value={""}> Estado de nascimento </option>{" "}
            {states && states.map((state) => {
              return (
                <option value={state} key={state}>
                  {" "}
                  {state}{" "}
                </option>
              );
            })}{" "}
          </SelectOptions>{" "}
          {dateClient.state === "RN" && driverLicense.number[0] === "6" ? (
            <>
              <h4> Cidade </h4>{" "}
              <InputForm
                placeholder={"Cidade de nascimento"}
                name={"city"}
                onChange={handleInputChange}
                pattern={"^.{4,}$"}
                title={"O nome da cidade deve ter no mínimo 4 caracteres"}
                required
              />
            </>
          ) : (
            ""
          )}
          <h2> Telefones </h2>{" "}
          {inputPhoneRow.length >= 1 ? (
            <>
              <InputFormDd
                placeholder={"dd"}
                name="phones_code_0"
                type={"number"}
                max={99}
                onChange={handleInputChange}
                required
              />
              <InputFormPhone
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
                required
              />{" "}
              Principal
            </>
          ) : (
            <>
              <InputFormDd
                placeholder={"dd"}
                name={"phones_code_0"}
                type={"number"}
                max={99}
                onChange={handleInputChange}
                required
              />
              <InputFormPhone
                placeholder={"número"}
                name={"phones_number_0"}
                onChange={handleInputChange}
                required
              />
            </>
          )}{" "}
          <ListDatesUl>
            {" "}
            {inputPhoneRow.map((index) => (
              <ListDatesLi key={index}>
                <InputFormDd
                  placeholder={"dd"}
                  name={"phones_code_" + index}
                  type={"number"}
                  max={99}
                  onChange={handleInputChange}
                  required
                />
                <InputFormPhone
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
                  required
                />{" "}
                Principal{" "}
                <ButtonRemove onClick={() => handleRemovePhone(index)}>
                  Remover{" "}
                </ButtonRemove>{" "}
              </ListDatesLi>
            ))}{" "}
          </ListDatesUl>{" "}
          <ButtonAdd onClick={() => handleAddNewPhone()}>
            Adicionar mais{" "}
          </ButtonAdd>{" "}
          <h2> E-mails </h2>{" "}
          <InputFormEmail
            placeholder={"email@exemplo.com"}
            name={"emails_address_0"}
            title="Email não está correto"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            onChange={handleInputChange}
            required
          />
          <ListDatesUl>
            {" "}
            {inputEmailRow.map((index) => (
              <ListDatesLi key={index}>
                <InputFormEmail
                  placeholder={"email@exemplo.com"}
                  name={"emails_address_" + index}
                  title="Email não está correto"
                  pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                  onChange={handleInputChange}
                  required
                />
                <ButtonRemove onClick={() => handleRemoveEmail(index)}>
                  Remover{" "}
                </ButtonRemove>{" "}
              </ListDatesLi>
            ))}{" "}
          </ListDatesUl>{" "}
          <ButtonAdd onClick={handleAddNewEmail}> Adicionar mais </ButtonAdd>
          {isAdult ? (
            " "
          ) : (
            <>
              {" "}
              <h2> Responsável </h2> <h4> Nome </h4>{" "}
              <InputForm
                placeholder={"Responsável"}
                name={"parent_name"}
                onChange={handleInputChange}
                title="Nome aceita somente letras e espaços em branco"
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                required
              />
              <h4> Telefone </h4>{" "}
              <InputFormDd
                placeholder={"dd"}
                name={"parent_phone_code"}
                type={"number"}
                max={99}
                onChange={handleInputChange}
                required
              />
              <InputFormPhone
                placeholder={"número"}
                name={"parent_phone_number"}
                onChange={handleInputChange}
                required
              />
            </>
          )}{" "}
        </ContainerFormDetails>{" "}
        <ButtonAddClient type={"submit"}> Salvar Cliente </ButtonAddClient>{" "}
      </form>{" "}
    </ContainerForm>
  );
};

export default Form;
