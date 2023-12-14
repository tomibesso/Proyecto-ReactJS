import { useEffect, useState } from "react";
import { getProducts } from "./services";

// Componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// Estilos
import './App.css';

// Estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetProducts } from "./hooks/useProducts";

const App = () => {

    const {productsData} = useGetProducts(15);

  return (
    <div style = {{width:'100vw', height:'100vh'}}>
      <NavBarComponent/>
      <ItemListContainer productsData = {productsData} greeting='Bienvenidos a mi E-Commerce'/>
    </div>
  )
}

export default App
