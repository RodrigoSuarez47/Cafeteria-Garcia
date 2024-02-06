import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'

let NavBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary d-flex flex-column align-items-center justify-content-evenly bg-secondary-subtle">
                <ul className="navbar-nav container-fluid d-flex flex-row align-items-center justify-content-around">
                    <li className="nav-item">
                        <Link to="/" className="navbar-brand">
                            <img className="img-fluid" src="/src/components/NavBar/assets/logoNegro.png" alt="Logo" height="100" width="100" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Categoria/Cafe" className="nav-link">Cafés</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Categoria/Cafetera" className="nav-link">Cafeteras</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Cart" className="nav-link"><CartWidget /></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar
