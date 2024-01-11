import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ Id, Nombre, Precio, Variedad, Imagen, Stock, Descripcion }) => {
    return (
        <div className="card my-4 mx-2" style={{ width: '18rem' }}>
            <img src={Imagen} className="card-img-top" alt={Nombre} />
            <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{Nombre}</h5>
                <p className="card-text">Variedad: {Variedad}</p>
                <p className="card-text text-center">{Descripcion}</p>
                <p className="card-text">Precio: ${Precio}</p>
            </div>
            <div>
                <ItemCount valorInicial={1} stock={Stock} onAdd={(cantidad) => console.log('Cantidad agregada', cantidad)} />
            </div>
        </div>
    );
}

export default ItemDetail;
