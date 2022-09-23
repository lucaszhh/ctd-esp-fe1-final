import { useEffect } from "react";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../Hook/Hook";
import { loadCharacterFavorites } from "../slices/Slice";
import { Character } from "../types/types";

/**
 * Esta es la pagina de favoritos
 * 
 * @returns {JSX.Element}
 */

const PaginaFavoritos = () => {

    const dispatch = useAppDispatch();
    const { characters, favorites, charactersFavorites } = useAppSelector((state)=> state.characters)

    useEffect(()=>{
        dispatch(loadCharacterFavorites())
    },[favorites, characters, dispatch])



    const charactersFavorite = characters.filter((character) => favorites.includes(character.id));

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes characters={ charactersFavorites }/>
    </div>
}

export default PaginaFavoritos