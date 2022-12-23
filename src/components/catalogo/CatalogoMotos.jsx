import React from 'react'
import { NavLink } from 'react-router-dom'
import catalogo from "../../stock.json"
import './styleCatalogo.css'
const CatalogoMotos = () => {
  return (
    <section className='containerCatalogo'>
      
        {
            catalogo.map(moto => (
                <>
                    
                    <NavLink to="/:1" >
                      <img className='motoCatalogo' key={moto.id} src={moto.fotoPrinc} alt="Honda Motos" />
                      
                    </NavLink>
                </>
            ))
        }
    </section>
  )
}

export default CatalogoMotos;