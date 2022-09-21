import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Hook/Hook";
import { charactersSlice, loadCharacter } from "../slices/Slice";

/**
 * Esta es la pagina principal. 
 * 
 * @returns elemento JSX con la pagina de inicio
 */

const PaginaInicio = () => {

    const { pages, name, characters } = useAppSelector((state)=> state.characters)

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(loadCharacter());
    },[ pages,name,dispatch ])

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes characters={characters}/>
        <Paginacion />
    </div>
}

export default PaginaInicio