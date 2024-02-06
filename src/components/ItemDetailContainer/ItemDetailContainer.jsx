import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { BD } from '../../services/firebase/firebaseConfig';

let ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { IdRecibido } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(BD, 'productos', IdRecibido);

            try {
                const response = await getDoc(docRef);
                if (response.exists()) {
                    const data = response.data();
                    const productoAdaptado = { Id: response.id, ...data };
                    setProducto(productoAdaptado);
                } else {
                    console.log("El documento no existe");
                }
            } catch (error) {
                console.error("Error al obtener detalles del producto:", error);
            }
        };

        fetchData();
    }, [BD, IdRecibido]);

    return (
        <div className="d-flex align-items-center justify-content-center">
            {producto ? <ItemDetail {...producto} /> : <p>Producto no encontrado</p>}
        </div>
    );
};

export default ItemDetailContainer;
