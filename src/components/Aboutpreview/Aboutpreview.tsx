import { Link } from "react-router-dom";
import teafields from "../../../public/img/tea_fields.webp";

function Aboutpreview() {
  return (
    <>
      <section className="h-[60vh] relative">
        <figure className="w-full h-full">
          <img
            src={teafields}
            alt="Tea fields in Japan"
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="absolute inset-0 bg-black/40 z-10" />

        <article className="absolute inset-0 w-[50%] h-full flex flex-col justify-center items-center gap-10 z-50 text-white mx-auto text-center px-4">
          <h2 className="text-[50px] font-roboto-condensed">
            The Spirit of <span className="text-sakura">Japanese</span>{" "}
            <span className="text-matcha">Tea</span>
          </h2>
          <p className="text-xl leading-relaxed text-white">
            From the <span className="text-kin">serene hills</span> of Japan to
            your cup. Our journey is steeped in{" "}
            <span className="text-matcha">tradition</span>,
            <span className="text-sakura"> care</span> and
            <span className="text-sakura"> craftsmanship</span>. Every leaf is{" "}
            <span className="text-matcha">handpicked</span> and every blend is
            created with purpose. <span className="text-kin">Taste the legacy</span> of generations.
          </p>
          <Link to="/about">
            <button className="h-15 w-48 text-xl rounded bg-button-green hover:bg-button transition duration-300 cursor-pointer font-roboto-condensed font-semibold">
              Learn More
            </button>
          </Link>
        </article>
      </section>
    </>
  );
}

export default Aboutpreview;
