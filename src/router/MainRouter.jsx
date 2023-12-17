import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <NavBarComponent/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/item/:productId" element={<ItemDetailContainer />}/>
        </Routes>
    </BrowserRouter>
  )
}
