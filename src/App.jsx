// Componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// Estilos
import './App.css';

// Estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div style = {{width:'100vw', height:'100vh'}}>
      <NavBarComponent/>
      <ItemListContainer greeting='Bienvenidos a mi E-Commerce'/>
    </div>
  )
}

export default App
