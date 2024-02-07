import { useState } from "react"
import { Link } from 'react-router-dom';

let ItemCount = ({ stock, valorInicial, onAdd }) => {
    let [cantidad, setCantidad] = useState(valorInicial)

    let incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    let decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center my-3">
            <div className="btn-group text-center my-2">
                <button type="button" className="btn btn-secondary" onClick={decrementar}>-</button>
                <button type="button" className="btn">{cantidad}</button>
                <button type="button" className="btn btn-secondary" onClick={incrementar}>+</button>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-success" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
            </div>
            <div>
                <Link to='/Categoria/Cafe' className='btn btn-secondary my-2'>Volver</Link>
            </div>
        </div>
    )
}

export default ItemCount