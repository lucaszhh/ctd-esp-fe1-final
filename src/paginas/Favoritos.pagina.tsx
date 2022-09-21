import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppSelector } from "../Hook/Hook";

/**
 * Esta es la pagina de favoritos
 * 
 * @returns elemento JSX con la pagina de favoritos
 */

const PaginaFavoritos = () => {

    const { favorites } = useAppSelector((state)=> state.characters)

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes characters={ favorites }/>
    </div>
}

export default PaginaFavoritos