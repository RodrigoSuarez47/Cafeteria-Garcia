let productos = [
    {
        Id: '1',
        Nombre: 'Café Colombia',
        Precio: 1000,
        Categoria: 'Cafe',
        Variedad: 'Arábica',
        Imagen: '/src/assets/cafe-colombia.png',
        Stock: 75,
        Descripcion: 'Se caracteriza por su sabor suave y equilibrado, con notas de nueces, cítricos y un toque de cacao. Este café es apreciado por su calidad y se cultiva en condiciones climáticas ideales que contribuyen a su perfil de sabor distintivo.'
    },
    {
        Id: '2',
        Nombre: 'Café Moka',
        Precio: 350,
        Categoria: 'Cafe',
        Variedad: 'Arábica',
        Imagen: '/src/assets/cafe-moka.png',
        Stock: 50,
        Descripcion: 'El café moka es una variedad de café que combina espresso con chocolate y a menudo se sirve con crema batida en la parte superior. Es conocido por su sabor rico y indulgente con notas de chocolate y café.'
    },
    {
        Id: '3',
        Nombre: 'Café Brasil',
        Precio: 750,
        Categoria: 'Cafe',
        Variedad: 'Robusta',
        Imagen: '/src/assets/cafe-brasil.png',
        Stock: 90,
        Descripcion: 'Se caracteriza por su sabor suave y agradable, con notas de avellanas. El café brasileño es conocido por ser versátil y se utiliza en una amplia variedad de mezclas y estilos de café a lo largo de todo el mundo.'
    },
    {
        Id: '4',
        Nombre: 'Café Organico',
        Precio: 490,
        Categoria: 'Cafe',
        Variedad: 'Arábica',
        Imagen: '/src/assets/cafe-organico.png',
        Stock: 30,
        Descripcion: 'El café orgánico se cultiva siguiendo prácticas agrícolas sostenibles y sin el uso de pesticidas ni fertilizantes químicos. El resultado es un café de alta calidad con un sabor puro y auténtico.'
    },
    {
        Id: '5',
        Nombre: 'Prensa Francesa',
        Precio: 990,
        Categoria: 'Cafetera',
        Imagen: '/src/assets/prensa-francesa.webp',
        Stock: 5,
        Descripcion: 'Es apreciada por su simplicidad y capacidad para resaltar los matices del café. Ofrece control sobre el tiempo de infusión y produce un café denso y con un perfil de sabor completo. Se mezcla café molido grueso con agua caliente, se deja infusionar y luego se presiona el émbolo para separar los posos del café.'
    },
    {
        Id: '6',
        Nombre: 'Cafetera Italiana',
        Precio: 1390,
        Categoria: 'Cafetera',
        Imagen: '/src/assets/cafetera-italiana.jpg',
        Stock: 10,
        Descripcion: 'La cafetera italiana, conocida por su elegancia y simplicidad, te brinda la experiencia auténtica del café espresso en la comodidad de tu hogar. Su diseño clásico se combina con un rendimiento excepcional: solo llena la base con agua, agrega tu café molido favorito, y en pocos minutos disfrutarás de un espresso deliciosamente aromático.'
    },
    {
        Id: '7',
        Nombre: 'Cafetera Dolce Gusto',
        Precio: 4590,
        Categoria: 'Cafetera',
        Imagen: '/src/assets/cafeteraDG.webp',
        Stock: 3,
        Descripcion: 'Dolce Gusto es una innovadora máquina de café que lleva la experiencia de preparar bebidas calientes a un nivel superior. Con un diseño moderno y compacto, esta máquina de cápsulas te permite disfrutar de una variedad de bebidas, desde espressos intensos hasta capuchinos y chocolates indulgentes.'
    },
    {
        Id: '8',
        Nombre: 'Cafetera Eléctrica',
        Precio: 1050,
        Categoria: 'Cafetera',
        Imagen: '/src/assets/cafetera-electrica.webp',
        Stock: 15,
        Descripcion: 'La cafetera eléctrica con jarra térmica es como tu mejor amiga para el café. Con solo apretar un botón, prepara tu café y lo guarda calentito en una jarra que mantiene ese líquido mágico en su punto. Puedes programarla, hacer el café más fuerte si te pega fuerte el sueño, y es fácil de cuidar. Es como tener a tu barista personal en casa, ¡pero sin salir de tus pantuflas!'
    }
]

export let obtenerProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export let obtenerProductosPorCategoria = (categoriaId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let productosEncontrados = productos.filter(producto => producto.Categoria === categoriaId);
            console.log("productosEncontrados:", productosEncontrados);
            if (productosEncontrados.length > 0) {
                resolve(productosEncontrados);
            } else {
                reject(new Error(`No se encontró ningún producto con la categoría ${categoriaId}`));
            }
        }, 500);
    });
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
