import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
    const { name } = useParams();
    const [bikes, setBikes] = useState([])
  useEffect(() => {

    axios.get("./assets/json/stock.json")
      .then(res => setBikes(res.data))
      .catch(err => console.log(err))
  }, [])
  
  
  return (
    <div>
      <h1>{name}</h1>
      {
        bikes.find(bike => (
          {/* <img src={bike.fotoPrinc} alt="moto" /> */}
          ))
      }
      
    </div>
  )
}

export default ItemDetailContainer;