let productos = [
    {
        Id: '1',
        Nombre: 'Café Colombia',
        Precio: 1000,
        Variedad: 'Arábica',
        Imagen: '/src/assets/cafe-colombia.png',
        Stock: 75,
        Descripcion: 'Se caracteriza por su sabor suave y equilibrado, con notas de nueces, cítricos y un toque de cacao. Este café es apreciado por su calidad y se cultiva en condiciones climáticas ideales que contribuyen a su perfil de sabor distintivo.'
    },
    {
        Id: '2',
        Nombre: 'Café Moka',
        Precio: 350,
        Variedad: 'Arábica',
        Imagen: '/src/assets/cafe-moka.png',
        Stock: 50,
        Descripcion: 'El café moka es una variedad de café que combina espresso con chocolate y a menudo se sirve con crema batida en la parte superior. Es conocido por su sabor rico y indulgente con notas de chocolate y café.'
    },
    {
        Id: '3',
        Nombre: 'Café Brasil',
        Precio: 750,
        Variedad: 'Robusta',
        Imagen: '/src/assets/cafe-brasil.png',
        Stock: 90,
        Descripcion: 'Se caracteriza por su sabor suave y agradable, con notas de avellanas. El café brasileño es conocido por ser versátil y se utiliza en una amplia variedad de mezclas y estilos de café a lo largo de todo el mundo.'
    },
    {
        Id: '4',
        Nombre: 'Café Organico',
        Precio: 490,
        Variedad: 'Arábica',
        Imagen: '/src/assets/cafe-organico.png',
        Stock: 30,
        Descripcion: 'El café orgánico se cultiva siguiendo prácticas agrícolas sostenibles y sin el uso de pesticidas ni fertilizantes químicos. El resultado es un café de alta calidad con un sabor puro y auténtico.'
    }
]

export let obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export let obtenerProductoPorId = (IdRecibido) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let productoEncontrado = productos.find(producto => producto.Id == IdRecibido);
            if (productoEncontrado) {
                resolve(productoEncontrado);
            } else {
                reject(new Error(`No se encontró ningún producto con el ID ${IdRecibido}`));
            }
        }, 500);
    });
};
