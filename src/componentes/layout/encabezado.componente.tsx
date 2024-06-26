import {Link} from "react-router-dom";
import './encabezado.css';

/**
 * Encabezado que contiene los links para navegar entre las páginas

 * @return {Element}
 */
const Encabezado: () => JSX.Element = () => {

    return <header>
            <div>
                <div>
                    <Link to="/" style={{color: "black", textDecoration: "none"}}>
                    <h2>Rick and Morty</h2>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado