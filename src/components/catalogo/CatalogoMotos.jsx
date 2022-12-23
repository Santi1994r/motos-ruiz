import React from 'react'
import catalogo from "../../stock.json"
import './styleCatalogo.css'
const CatalogoMotos = () => {
  return (
    <section className='containerCatalogo'>
      
        {
            catalogo.map(moto => (
                <>
                    
                    <img className='motoCatalogo' key={moto.id} src={moto.fotoPrinc} alt="Honda Motos" />
                    
                </>
            ))
        }
    </section>
  )
}

export default CatalogoMotos;