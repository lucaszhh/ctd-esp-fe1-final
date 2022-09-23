import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import Encabezado from "./componentes/layout/encabezado.componente";


const App = () => {

  
  return (
      <div className="App"> 
        <Encabezado />
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
        </Routes>
      </div>
)};

export default App;