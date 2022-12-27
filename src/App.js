import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectMoto from "./components/catalogo/ItemDetailContainer";
import { Error } from "./components/error/Error";
import ItemListContainer from "./components/ItemListContainer";
import NavbarHonda from "./components/NavbarHonda";
import { Store } from "./components/store/Store";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarHonda />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Descubre Tu Honda" />} />
          <Route path="/store" element={<Store />} />
          <Route path="/catalogo/:id" element={<SelectMoto />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
