import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({ stockBikes }) => {
    const { name, fotoPrinc } = useParams();

    console.log(fotoPrinc);

  return (
    <div>
        <h1>{name}</h1>
      <p>{stockBikes.text1}</p>
      <img src={fotoPrinc} alt="moto" />
    </div>
  )
}

export default ItemDetailContainer;