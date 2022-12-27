import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/catalogo/ItemDetailContainer";
import { Error } from "./components/error/Error";
import ItemListContainer from "./components/ItemListContainer";
import NavbarHonda from "./components/NavbarHonda";
import { Store } from "./components/store/Store";
import stockBikes from "./stock.json"
import axios from 'axios';
/* import { useEffect, useState } from "react"; */

function App() {
 /*  const [stockBikes, setStockBikes] = useState([]);

  useEffect(() => {
    axios.get("./stock.json")/*Aca como traigo lo que tengo en el json?? como seria la ruta?
      .then(resp =>console.log(resp))
      .catch(err => console.log(err))
  }, []) */

  return (
    <>
      <BrowserRouter>
        <NavbarHonda />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Descubre Tu Honda" />} />
          <Route path="/store" element={<Store />} />
          <Route path="/:name" element={<ItemDetailContainer stockBikes={stockBikes} />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
