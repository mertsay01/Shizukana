import { products } from "../../data/Products";

function Bestsellers() {
  return (
    <>
      <section className="h-[90vh] flex items-center flex-col gap-5 bg-washi pt-12">
      <h2 className="text-[45px] uppercase font-roboto-condensed font-bold mb-4">Best sellers</h2>
      <article className="w-[90%] h-[80%]">
        <ul className="h-full flex justify-center items-center gap-8">
            {products.slice(0, 4).map((product) => (
                <li key={product.id} className="h-full w-[20%] flex justify-center items-center flex-col gap-4">
                    <img src={product.images.combined} alt={product.name} className="h-120 object-contain rounded" />
                    <div className="text-center flex justify-center items-center flex-col gap-2">
                        <h3 className="text-3xl font-bold uppercase">{product.name}</h3>
                        <p className="text-2xl">€{product.price.toFixed(2)}</p>
                        <button className="h-10 w-16 text-xl rounded bg-button-green hover:bg-button transition duration-300 cursor-pointer font-roboto-condensed font-semibold">
                          +
                        </button>
                    </div>
                </li>
            ))}
        </ul>
      </article>
    </section>
    </>
  );
}

export default Bestsellers;
