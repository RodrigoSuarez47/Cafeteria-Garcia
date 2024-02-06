import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, where, query } from "firebase/firestore";
import { BD } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = categoriaId
                    ? query(collection(BD, 'productos'), where('Categoria', '==', categoriaId))
                    : collection(BD, 'productos');

                const response = await getDocs(collectionRef);

                const productosAdaptados = response.docs.map(doc => {
                    const data = doc.data();
                    return { Id: doc.id, ...data };
                });

                setProductos(productosAdaptados);
            } catch (error) {
                console.error("Error al obtener datos de Firebase:", error);
            }
        };

        fetchData();
    }, [BD, categoriaId]);

    return (
        <>
            <h2 className="text-center py-4">Nuestros Productos</h2>
            <ItemList productos={productos} />
        </>
    );
};

export default ItemListContainer;
