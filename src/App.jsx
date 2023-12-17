
// Componentes
import { MainRouter } from "./router/MainRouter";

// Estilos
import './App.css';

// Estilos Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {


  return (
    <div className="hola" style = {{width:'100vw', height:'100vh'}}>
      <MainRouter />
    </div>
  )
}

export default App
