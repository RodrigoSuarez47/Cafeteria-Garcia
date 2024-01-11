import CartWidget from "../CartWidget/CartWidget";

let NavBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary d-flex flex-column align-items-center justify-content-evenly bg-secondary-subtle">
                <ul className="navbar-nav container-fluid d-flex flex-row align-items-center justify-content-around">
                    <li className="nav-item">
                        <a className="navbar-brand" href="/">
                            <img className="img-fluid" src="src\components\NavBar\assets\logoNegro.png" alt="Logo" height="100" width="100" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><CartWidget /></a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar