import { useState, useEffect } from "react";
import { obtenerProductos, obtenerProductosPorCategoria } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";

let ItemListContainer = () => {
    let [productos, setProductos] = useState([])

    let { categoriaId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await (categoriaId ? obtenerProductosPorCategoria : obtenerProductos)(categoriaId);
                setProductos(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [categoriaId]);

    return (
        <>
            <h2 className="text-center py-4">Nuestros Productos</h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer