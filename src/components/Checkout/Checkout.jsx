import React, { useContext, useState } from 'react';
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore";
import { CartContext } from '../../context/CartContext';
import { BD } from '../../services/firebase/firebaseConfig';
import { Timestamp } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm.jsx';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { carro, limpiarCarro, costoTotal } = useContext(CartContext);

    const crearOrden = async ({ nombre, telefono, email }) => {
        setLoading(true);
        console.log(carro);
        try {
            const orden = {
                comprador: { nombre, telefono, email },
                items: carro,
                total: costoTotal,
                fecha: Timestamp.fromDate(new Date())
            };
            const batch = writeBatch(BD);
            const sinStock = [];
            const ids = carro.map(prod => prod.Id)

            const productsCollection = query(collection(BD, 'productos'), where(documentId(), 'in', ids));
            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;
            docs.forEach(doc => {
                const fields = doc.data();
                const stockDb = fields.stock;
                const productsAddedToCart = carro.find(prod => prod.Id === doc.id);
                const prodQuantity = productsAddedToCart.quantity;
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    sinStock.push({ id: doc.id, ...fields });
                }
            });
            if (sinStock.length === 0) {
                batch.commit();
                const orderCollection = collection(BD, 'ordenes');
                const { id } = await addDoc(orderCollection, orden);
                setOrderId(id);
                limpiarCarro();
            } else {
                console.log("Hay productos sin stock disponible");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se está generando su orden...</h1>;
    }

    if (orderId) {
        return (
            <>
                <h1>El número de su orden es:</h1>
                <h2>{orderId}</h2>
            </>
        );
    }

    return (
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={crearOrden}></CheckoutForm>
        </div>
    );
};

export default Checkout;
