import React, {useState} from "react";
import Slider from "../../components/Slider/Slider";
import ListClients from "../../components/ListClients/ListClients";
import index from "../../server/index.json";


function HomePage() {
  const [listClients, setListClients] = useState([index.customers])

  return (
    <>
      <Slider />
      <ListClients listClients={listClients}/>
    </>
  );
}

export default HomePage;
