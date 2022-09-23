import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import {Character} from "../../types/types"
import { useAppDispatch } from '../../Hook/Hook';
import { charactersSlice, loadCharacter } from '../../slices/Slice';


/**
 * Grilla que visualiza cada personaje
 * 
 * @param {Character} character
 * @returns un JSX element 
 */

type Props = {
    character: Character;
};

const TarjetaPersonaje = ({ character }: Props) => {

    const dispatch = useAppDispatch();

    const hadlerOnClick = () => {
        character.isFavorite 
        ? dispatch(charactersSlice.actions.deleteFavorite(character.id))
        : dispatch(charactersSlice.actions.addFavorite(character.id));
        dispatch(loadCharacter());
    }

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito isFavorite={character.isFavorite} onClick={() => hadlerOnClick()}/>
        </div>
    </div>
}

export default TarjetaPersonaje;