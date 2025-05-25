import { Link } from "react-router-dom";
import { products } from "../../data/Products";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Shop() {
  return (
    <>
      <Navbar />
      <section className="bg-washi h-auto px-6 py-24 font-roboto-condensed text-black">
        <h1 className="text-[55px] font-bold text-center mb-16 uppercase">
          Our <span className="text-matcha">Teas</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <article className="cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition duration-300 text-center px-4 py-6">
                <img
                  src={product.images.pouchnobg}
                  alt={product.name}
                  className="h-64 w-full object-contain mb-6"
                />
                <h2 className="text-2xl font-bold uppercase mb-2">{product.name}</h2>
                <p className="text-xl">€{product.price.toFixed(2)}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
