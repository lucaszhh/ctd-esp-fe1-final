import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Character } from "../../types/types"


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * @param {Character[]} characters
 * @returns un JSX element 
 */


type Props = {
    characters: Character[];
};

const GrillaPersonajes = ({ characters }: Props) => {

    return <div className="grilla-personajes">
        {
        characters ?
        characters.map((character)=>{
            const {id, name, image, episode, isFavorite } = character;
            return <TarjetaPersonaje key={id} character={{id, name, image, episode, isFavorite}}/>
        })
        : <h2>NO SE ENCONTRO NINGUN PERSONAJE</h2>
        }
    </div>
}
 
export default GrillaPersonajes;