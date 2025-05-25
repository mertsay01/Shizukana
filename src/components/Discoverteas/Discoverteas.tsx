import { Link } from "react-router-dom";
import { products } from "../../data/Products";

function Discoverteas() {
  return (
    <>
      <section className="h-auto bg-washi p-10 flex flex-col items-center">
        <h2 className="text-[45px] mb-10 font-bold text-center uppercase font-roboto-condensed">
          Our Selection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-10">
          {products.map((product) => (
            <article
              key={product.id}
              className="text-center flex flex-col items-center"
            >
              <img
                src={product.images.bowl}
                alt={product.name}
                className="mb-4 rounded shadow h-64 object-contain"
              />
              <h2 className="text-2xl font-semibold mb-1 font-roboto-condensed">
                {product.name}
              </h2>
              <p className="text-matcha text-lg">{product.description}</p>
            </article>
          ))}
        </div>
        <Link to="/shop">
          <button className="h-15 w-48 text-xl rounded bg-button-green hover:bg-button transition duration-300 cursor-pointer font-roboto-condensed font-semibold">
            Shop All Teas
          </button>
        </Link>
      </section>
    </>
  );
}

export default Discoverteas;
