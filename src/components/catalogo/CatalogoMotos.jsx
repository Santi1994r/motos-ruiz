import React from 'react'
import { Link } from 'react-router-dom'
import './styleCatalogo.css'
const CatalogoMotos = ({ stockBikes }) => {
  return (
    <section className='containerCatalogo'>
      
        {
          stockBikes.map(moto => (
            <>
                    <Link to={`/catalogo/${moto.name.toLowerCase()}`} >
                      <img className='motoCatalogo' key={moto.id} src={moto.fotoPrinc} alt="Honda Motos" />
                    </Link>
                </>
            ))
        }
    </section>
  )
}

export default CatalogoMotos;