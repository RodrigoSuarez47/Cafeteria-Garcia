import { useState, useEffect } from "react"
import { obtenerProductoPorId } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

let ItemDetailContainer = () => {
    let [producto, setProducto] = useState(null)

    let { IdRecibido } = useParams()

    useEffect(() => {
        obtenerProductoPorId(IdRecibido)
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [IdRecibido])

    return (
        <div className="d-flex align-items-center justify-content-center">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer