import { createContext, useState } from 'react';

export const CartContext = createContext({
    carro: [],
    cantidadTotal: 0,
    costoTotal: 0,
    agregarItem: () => { },
    eliminarItem: () => { },
    limpiarCarro: () => { }
});

export const CartProvider = ({ children }) => {
    const [carro, setCarro] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [costoTotal, setCostoTotal] = useState(0);

    const agregarItem = (item, cantidad) => {
        if (!estaEnCarro(item.Id)) {
            setCarro(prev => [...prev, { ...item, cantidad }]);
            setCantidadTotal(prev => prev + cantidad);
            setCostoTotal(prevCosto => prevCosto + item.Precio * cantidad);
        } else {
            console.log("El producto ya fue agregado en el carro");
        }
    }

    const eliminarItem = (itemId) => {
        const productoEliminado = carro.find(prod => prod.Id === itemId);
        const cantidadEliminada = productoEliminado.cantidad;
        const nuevoCarro = carro.filter(prod => prod.Id !== itemId);

        setCarro(nuevoCarro);
        setCantidadTotal(prevCantidad => prevCantidad - cantidadEliminada);
        setCostoTotal(prevCosto => prevCosto - productoEliminado.Precio * cantidadEliminada);
    }

    const limpiarCarro = () => {
        setCarro([]);
        setCantidadTotal(0);
        setCostoTotal(0);
    }

    const estaEnCarro = (itemId) => {
        return carro.some(prod => prod.Id === itemId);
    }

    return (
        <CartContext.Provider value={{ carro, agregarItem, eliminarItem, limpiarCarro, cantidadTotal, costoTotal }}>
            {children}
        </CartContext.Provider>
    );
}
