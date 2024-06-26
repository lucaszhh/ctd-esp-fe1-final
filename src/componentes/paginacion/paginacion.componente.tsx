import { useAppDispatch, useAppSelector } from '../../Hook/Hook';
import { charactersSlice } from '../../slices/Slice';
import './paginacion.css';
import { LIMIT } from "../../constant/constant"

/**
 * Componente que contiene los botones para paginar
 * @returns un JSX element 
 */

const Paginacion = () => {
  const { pages , totalPages} = useAppSelector((state) => state.characters);

  const dispatch = useAppDispatch();
  
  const prevPage = () => {
    dispatch(charactersSlice.actions.prevPage())
  };

  const nextPage = () => {
    dispatch(charactersSlice.actions.nextPage())
  };

  console.log(pages, totalPages);
  

  return <div className="paginacion">
      <button disabled={pages === LIMIT} className={"primary"} onClick={()=> prevPage()}>Anterior</button>
      <div style={{border: "solid 1px black", display: "flex", alignItems: "center", padding: "5px 10px", gap: "5px", borderRadius: "5px"}}>Page <strong> {pages} / {totalPages} </strong></div>
      <button disabled={pages === totalPages} className={"primary"} onClick={()=> nextPage()}>Siguiente</button>
  </div>
}

export default Paginacion;