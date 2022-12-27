import React from 'react'
import CatalogoMotos from './catalogo/CatalogoMotos'

export default function ItemListContainer(props) {
  return (
    <div>
        <h1 className='text-center my-4'>{props.greeting}</h1>
        <CatalogoMotos />
    </div>
  )
};

