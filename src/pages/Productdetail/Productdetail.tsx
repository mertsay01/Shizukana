import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { products } from "../../data/Products";

function Productdetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center text-2xl py-32">Product niet gevonden.</div>
        <Footer />
      </>
    );
  }

  const thumbnails = [
    product.images.combined,
    product.images.bowl,
    product.images.pouch,
  ];
  const [mainImage, setMainImage] = useState(thumbnails[0]);

  return (
    <>
      <Navbar />
      <section className="h-[90vh] mt-20 flex bg-washi">
        <div className="w-[50%] flex justify-end items-center relative">
          <div className="absolute top-10 left-10 flex flex-col gap-4">
            {thumbnails.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-contain rounded cursor-pointer border-2 ${
                  mainImage === img ? "border-black" : "border-transparent"
                } hover:border-black transition`}
                alt={`thumb-${index}`}
              />
            ))}
          </div>
          <figure className="w-[70%]">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[700px] object-contain rounded"
            />
          </figure>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <article className="w-[80%] flex flex-col gap-8 font-roboto-condensed">
            <h1 className="text-[55px] font-bold uppercase">{product.name}</h1>
            <h3 className="text-3xl font-semibold">
              €{product.price.toFixed(2)}
            </h3>
            <p className="text-xl leading-relaxed">{product.description}</p>
            <button className="h-12 w-48 text-xl rounded bg-button-green hover:bg-button transition duration-300 cursor-pointer font-semibold">
              Add To Cart
            </button>
          </article>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Productdetail;
