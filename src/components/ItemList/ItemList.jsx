import Item from '../Item/Item'

let ItemList = ({ productos }) => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            {productos.map(producto => <Item key={producto.Id} {...producto} />)}
        </div>
    )
}

export default ItemList