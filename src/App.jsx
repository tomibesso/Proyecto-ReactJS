import { useEffect, useState } from "react";
import { getProducts } from "./services";

// Componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// Estilos
import './App.css';

// Estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
      getProducts()
      .then((response) => {
        setProductsData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      })
    }, []);

  return (
    <div style = {{width:'100vw', height:'100vh'}}>
      <NavBarComponent/>
      <ItemListContainer productsData = {productsData} greeting='Bienvenidos a mi E-Commerce'/>
    </div>
  )
}

export default App
