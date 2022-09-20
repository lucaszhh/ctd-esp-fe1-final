import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';
import {Character} from "../../types/types"


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */


type Props = {
    character: Character;
};

const TarjetaPersonaje = ({ character }: Props) => {

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={false} onClick={()=>{}}/>
        </div>
    </div>
}

export default TarjetaPersonaje;