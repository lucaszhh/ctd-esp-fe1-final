import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import {  useAppSelector } from "../../Hook/Hook";


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const { characters } = useAppSelector((state)=> state.characters);
    

    return <div className="grilla-personajes">

        {
        characters.map((character,index)=>{
            const {id, name, image, episode} = character;
            return <TarjetaPersonaje key={index} character={{id, name, image, episode}}/>
        })
        }

    </div>
}
 
export default GrillaPersonajes;