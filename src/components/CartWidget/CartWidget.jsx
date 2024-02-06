import { useContext } from 'react';
import logo from './assets/CartWidget.svg';
import { CartContext } from '/src/context/CartContext';

let CartWidget = () => {
    let { cantidadTotal } = useContext(CartContext);

    return (
        <button className="btn btn-dark d-flex flex-direction-row align-items-center text-white">
            <img src={logo} alt="Carrito" height={25} width={25} />
            <p className="m-0">{cantidadTotal}</p>
        </button>
    );
}

export default CartWidget;
