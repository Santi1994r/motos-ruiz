import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import ItemDetailContainer from "./components/catalogo/ItemDetailContainer";
import Error from "./components/error/Error";
import ItemListContainer from "./components/ItemListContainer";
import NavbarHonda from "./components/NavbarHonda";
import { Store } from "./components/store/Store";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <NavbarHonda />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/store" element={<Store />} />
          <Route path="/catalogo/:name" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
