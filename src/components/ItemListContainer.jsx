import React from 'react'
import CatalogoMotos from './catalogo/CatalogoMotos'
import { useEffect, useState } from "react";
/* import stockBikes from "./stock.json" */
import axios from 'axios';

export default function ItemListContainer(props) {
  const [stockBikes, setStockBikes] = useState([])

  useEffect(() => {
    axios.get("./assets/json/stock.json")
      .then(resp => setStockBikes(resp.data))
      .catch(err => console.log(err))
   
  }, [])

  return (
    <div>
        <CatalogoMotos stockBikes={stockBikes}  />
    </div>
  )
};

