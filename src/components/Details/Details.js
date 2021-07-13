import React from "react";
import {
  TitleListClients,
  CardContainer,
  TableMain,
  TableMainTr,
  TableMainTdTitle,
  TableMainTd,
} from "./Styled";

function Details(props) {
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
            <TableMainTdTitle>Nome do Cliente</TableMainTdTitle>
            <TableMainTd>{props.client.name}</TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTdTitle>Data de Nascimento</TableMainTdTitle>
            <TableMainTd>{props.client.birthday}</TableMainTd>
          </TableMainTr>
          {driver && ageValidation(props.client.birthday) ? (
            <>
              <TableMainTr>
                <TableMainTdTitle>
                  Carteira de Motorista - Data
                </TableMainTdTitle>
                <TableMainTd>
                  {driver.number} / {driver.issued_at}
                </TableMainTd>
              </TableMainTr>
            </>
          ) : (
            ""
          )}
          <TableMainTr>
            <TableMainTdTitle>Estado</TableMainTdTitle>
            <TableMainTd>{props.client.state}</TableMainTd>
          </TableMainTr>
          {props.client.city ? (
            <>
              <TableMainTr>
                <TableMainTdTitle>Cidade</TableMainTdTitle>
                <TableMainTd>{props.client.city}</TableMainTd>
              </TableMainTr>
            </>
          ) : (
            ""
          )}

          <TableMainTr>
            <TableMainTdTitle>Telefones</TableMainTdTitle>
            <TableMainTd>
              {props.client.phones.map((phone) => (
                <div>
                  {"("}
                  {phone.code}
                  {")"} - {phone.number} 
                </div>
              ))}
            </TableMainTd>
          </TableMainTr>
          <TableMainTr>
            <TableMainTdTitle>E-mails</TableMainTdTitle>
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
                <TableMainTdTitle>Responsável</TableMainTdTitle>
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
