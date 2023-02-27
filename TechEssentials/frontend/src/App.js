import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/"> TechEssentials</a>
      </header>

      <main>
        <h1>Productos</h1>
        {/* renderizamos los productos  con un mapa */}
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>

              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>

                <button> Añadir al carrito</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
