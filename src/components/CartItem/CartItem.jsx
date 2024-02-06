import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ Id, Nombre, Imagen, Precio, cantidad }) => {
    const { eliminarItem } = useContext(CartContext);

    return (
        <div className="card my-4 mx-2" style={{ width: '18rem' }}>
            <img src={Imagen} className="card-img-top" alt={Nombre} />
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{Nombre}</h5>
                <p className="card-text text-center">x {cantidad} unidades</p>
                <h6>Total:</h6>
                <p className="card-text">${Precio * cantidad}</p>
                <button onClick={() => eliminarItem(Id)} className='btn btn-danger'>Eliminar Producto</button>
            </div>
        </div>
    );
};

export default CartItem;
