import logo from './assets/CartWidget.svg';

let CartWidget = () => {
    return (
        <button className="btn btn-dark d-flex flex-direction-row align-items-center text-white">
            <img src={logo} alt="Carrito" height={25} width={25} />
            <p className="m-0">0</p>
        </button>
    )
}

export default CartWidget