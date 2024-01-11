import { useState, useEffect } from "react";
import { obtenerProductos } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

let ItemListContainer = () => {
    let [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerProductos()
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <>
            <h2 className="text-center py-4">Nuestros Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer