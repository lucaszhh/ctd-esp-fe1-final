import { useAppDispatch } from '../../Hook/Hook';
import { charactersSlice } from '../../slices/Slice';
import './filtros.css';

/**
 * Filtro de busqueda de personajes
 * 
 * @returns un JSX element 
 */


const Filtros = () => {

    const dispatch = useAppDispatch();

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre"
        onChange={(e) => dispatch((charactersSlice.actions.searchByName(e.target.value)))} />
    </div>
}

export default Filtros;