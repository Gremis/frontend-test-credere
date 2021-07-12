import React from "react";
import {
  TitleListClients,
  CardContainer,
  TableMain,
  TableMainTr,
  TableMainTd,
} from "./Styled";

function Details(props) {
  console.log(props);
  const driver = props.client.driver_license;
  const parent = props.client.parent;

  const ageValidation = (birthday) => {
    const today = new Date();
    const birthdayAge = new Date(birthday);
    let age = today.getFullYear() - birthdayAge.getFullYear();
    const m = today.getMonth() - birthdayAge.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthdayAge.getDate())) {
      age--;
    }

    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  };

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
          {driver && ageValidation(props.client.birthday) ? (
            <>
              <TableMainTr>
                <TableMainTd>Carteira de Motorista - Data</TableMainTd>
                <TableMainTd>
                  {driver.number} / {driver.issued_at}
                </TableMainTd>
              </TableMainTr>
            </>
          ) : (
            ""
          )}
          <TableMainTr>
            <TableMainTd>Estado</TableMainTd>
            <TableMainTd>{props.client.state}</TableMainTd>
          </TableMainTr>
          {props.client.city ? (
            <>
              <TableMainTr>
                <TableMainTd>Cidade</TableMainTd>
                <TableMainTd>{props.client.city}</TableMainTd>
              </TableMainTr>
            </>
          ) : (
            ""
          )}

          <TableMainTr>
            <TableMainTd>Telefones</TableMainTd>
            <TableMainTd>
              {props.client.phones.map((phone) => (
                <div>
                  {"("}
                  {phone.code}
                  {")"}- {phone.number}
                </div>
              ))}
            </TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTd>E-mails</TableMainTd>
            <TableMainTd>
              {props.client.emails.map((email) => (
                <div>{email.address}</div>
              ))}
            </TableMainTd>
          </TableMainTr>
          {parent && !ageValidation(props.client.birthday) ? (
            <>
              {" "}
              <TableMainTr>
                <TableMainTd>Responsável</TableMainTd>
                <TableMainTd>
                  <div>
                    {parent.name} - {"("}
                    {parent.phone.code}
                    {")"}
                    {parent.phone.number}
                  </div>
                </TableMainTd>
              </TableMainTr>
            </>
          ) : (
            ""
          )}
        </TableMain>
      </CardContainer>
    </div>
  );
}

export default Details;
