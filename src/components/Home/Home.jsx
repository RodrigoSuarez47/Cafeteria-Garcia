
let Home = ({ greeting }) => {
    return (
        <div className="container text-center">
            <h2 className="p-4">{greeting}</h2>
            <div className="p-6">
                <p>  Cafetería García te invita a sumergirte en un rincón digital dedicado a los amantes del café más exigentes. <br /> Como una cafetería exclusivamente en línea, hemos creado un espacio donde la pasión por el café se fusiona con la comodidad moderna. <br />Explora nuestro mundo, donde cada grano cuenta una historia y cada taza es una invitación a descubrir nuevas dimensiones de sabor.</p>
                <h6>Variedades de Café para Todos los Gustos</h6>
                <p>
                    Nuestra amplia gama de café abarca desde el distinguido Café Colombia, con su sutil acidez y cuerpo equilibrado, hasta el cautivador Moka, que despierta los sentidos con su combinación única de intensidad y aroma. <br />
                    Descubre la autenticidad en cada sorbo con nuestro café Orgánico, cultivado con respeto por la tierra y el medio ambiente. <br />
                    Viaja a través de los exuberantes paisajes de Brasil con nuestra selección especial de granos que capturan la esencia vibrante de esta región cafetera.
                </p>
                <h6>Pasión por la Calidad</h6>
                <p>
                    En Cafetería García, la calidad es nuestra máxima prioridad. Seleccionamos los granos más finos y frescos de cada región para garantizar una experiencia de café excepcional. <br />
                    Desde el cultivo hasta tu taza, cada etapa se lleva a cabo con dedicación y cuidado, para ofrecerte una calidad que puedes saborear en cada momento.
                </p>
                <h6>Descubre y Disfruta con Nosotros</h6>
                <p>
                    Explora nuestro intuitivo espacio en línea y descubre la diversidad de nuestro menú.<br /> No solo ofrecemos una variedad de café, sino también complementos y accesorios que harán de cada pausa para el café un momento especial. <br />Además, mantente conectado con nosotros a través de eventos y promociones exclusivas, diseñadas para celebrar la cultura del café.
                </p>
                <a href="/Categoria/Cafe" className="btn btn-secondary btn-lg my-2 mx-5">Ver Cafés</a>
                <a href="/Categoria/Cafetera" className="btn btn-secondary btn-lg my-2 mx-5">Ver Cafeteras</a>
            </div>
        </div>
    )
}

export default Home