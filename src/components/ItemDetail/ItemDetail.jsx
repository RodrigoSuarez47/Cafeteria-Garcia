import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ Id, Nombre, Precio, Imagen, Stock, Descripcion }) => {
    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const { agregarItem } = useContext(CartContext);

    const clickEnAgregar = (cantidad) => {
        setCantidadAgregada(cantidad);

        let item = {
            Id, Nombre, Precio, Imagen
        };

        agregarItem(item, cantidad);

        console.log(item, cantidad)
        console.log(CartContext)
    }

    return (
        <div className="card my-4 mx-2" style={{ width: '18rem' }}>
            <img src={Imagen} className="card-img-top" alt={Nombre} />
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{Nombre}</h5>
                <p className="card-text text-center">{Descripcion}</p>
                <p className="card-text">Precio: ${Precio}</p>
            </div>
            <div className='text-center my-2'>
                {
                    cantidadAgregada > 0 ? (
                        <Link to='/Cart' className='btn btn-secondary'>Terminar Compra</Link>
                    )
                        : (< ItemCount valorInicial={1} stock={Stock} onAdd={clickEnAgregar} />)
                }
            </div>
        </div>
    )
}

export default ItemDetail;
