import { BrowserRouter, Route, Routes } from "react-router-dom";
import CatalogoMotos from "./components/catalogo/CatalogoMotos";
import SelectMoto from "./components/catalogo/SelectMoto";
import ItemListContainer from "./components/ItemListContainer";
import NavbarHonda from "./components/NavbarHonda";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarHonda />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Descubre Tu Honda" />} />
          <Route path="/catalogo" element={<CatalogoMotos />} />
          <Route path="/catalogo/:id" element={<SelectMoto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
