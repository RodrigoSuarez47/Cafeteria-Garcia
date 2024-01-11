import { Link } from "react-router-dom";

const Item = ({ Id, Nombre, Precio, Imagen }) => {
    return (
        <div className="card my-4 mx-2" style={{ width: '18rem' }}>
            <img src={Imagen} className="card-img-top" alt={Nombre} />
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{Nombre}</h5>
                <p className="card-text">Precio: ${Precio}</p>
                <Link to={`/Producto/${Id}`} className="btn btn-secondary">Ver detalles</Link>
            </div>
        </div >
    );
}

export default Item;