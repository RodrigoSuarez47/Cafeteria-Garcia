import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { carro, limpiarCarro, costoTotal } = useContext(CartContext);

    const handleVaciarCarro = () => {
        limpiarCarro();
    };

    if (carro.length === 0) {
        return (
            <div className='d-flex justify-content-center align-items-center'>
                <h2 className='my-5 p-5'>No hay productos en el carrito</h2>
            </div>
        );
    }

    return (
        <>
            <h2 className="py-4 text-center">Compra</h2>
            <div className='d-flex align-items-center justify-content-center'>
                {carro.map((producto) => (
                    <CartItem key={producto.Id} {...producto} />
                ))}
            </div>
            <h4 className="py-4 text-center">Total: ${costoTotal}<br></br></h4>
            <div className='d-flex align-items-center justify-content-center'>
                <button onClick={handleVaciarCarro} className='btn btn-secondary mx-5 my-2 p-2'>Vaciar Carrito</button>
                <a href="/checkout" className='btn btn-primary mx-5 my-2 p-2'>Finalizar Compra</a>
            </div>
        </>
    );
};

export default Cart;
