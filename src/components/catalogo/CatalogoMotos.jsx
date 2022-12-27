import React from 'react'
import { Link } from 'react-router-dom'
import catalogo from "../../stock.json"
import './styleCatalogo.css'
const CatalogoMotos = () => {
  return (
    <section className='containerCatalogo'>
      
        {
          catalogo.map(moto => (
            <>
                    <Link to={`${moto.name.toLowerCase()}`} >
                      <img className='motoCatalogo' key={moto.id} src={moto.fotoPrinc} alt="Honda Motos" />
                    </Link>
                </>
            ))
        }
    </section>
  )
}

export default CatalogoMotos;