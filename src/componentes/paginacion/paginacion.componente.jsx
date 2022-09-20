import { useAppDispatch, useAppSelector } from '../../Hook/Hook';
import { charactersSlice, loadAllCharacter } from '../../slices/Slice';
import './paginacion.css';
import { LIMIT } from "../../constant/constant"
import { useEffect } from 'react';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
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

  return <div className="paginacion">
      <button disabled={pages === LIMIT} className={"primary"} onClick={()=> prevPage()}>Anterior</button>
      <button disabled={pages === totalPages} className={"primary"} onClick={()=> nextPage()}>Siguiente</button>
  </div>
}

export default Paginacion;