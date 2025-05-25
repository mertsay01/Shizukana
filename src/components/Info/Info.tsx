import { Link } from "react-router-dom";

import matcha_theekop from "../../../public/img/matcha_tea_set_traditional.webp";
import drinkinghojicha from "../../../public/img/person_hojicha_drinking.webp";
import japansetheeboer from "../../../public/img/japaneseteafarmer.webp";
import theeschenken from "../../../public/img/tea_pouring.webp";

function Info() {
  return (
    <>
      <section className="h-screen bg-washi grid grid-cols-2 grid-rows-2">
        <figure className="h-full w-full">
          <img src={matcha_theekop} alt="" className="h-full w-full object-cover" />
        </figure>

        <article className="flex flex-col justify-center items-center bg-black/25 text-white">
          <figure className="h-full w-full relative opacity-75 mix-blend-multiply">
            <img src={theeschenken} alt="" className="h-full w-full object-cover" />
          </figure>
          <div className="absolute w-[40%] flex flex-col justify-center items-center">
            <h3 className="text-4xl font-bold font-roboto-condensed mb-4">
              More Than Just <span className="text-matcha">Tea</span>
            </h3>
            <hr className="w-12 border-t-3 border-matcha mb-6" />
            <p className="text-xl text-center mb-4">
              Every cup of <span className="text-kin">Shizukana</span> is a pause, a <span className="text-sakura">quiet moment</span> in the middle of your day. Rooted in <span className="text-matcha">Japanese tradition</span>, our teas are crafted to bring <span className="text-kin">clarity</span>, <span className="text-sakura">care</span>, and <span className="text-matcha">intention</span> to your routine.
            </p>
            <Link to="/about">
              <button className="h-auto w-auto text-xl bg-button-green hover:bg-button transition duration-300 cursor-pointer font-roboto-condensed font-semibold p-4 rounded-full">
                Explore our sourcing process
              </button>
            </Link>
          </div>
        </article>

        <article className="flex flex-col justify-center items-center bg-black/25 text-white">
          <figure className="h-full w-full relative opacity-75 mix-blend-multiply">
            <img src={japansetheeboer} alt="" className="h-full w-full object-cover" />
          </figure>
          <div className="absolute w-[40%] flex flex-col justify-center items-center">
            <h3 className="text-4xl font-bold font-roboto-condensed mb-4">
              Crafted With <span className="text-kin">Purpose</span>
            </h3>
            <hr className="w-12 border-t-3 border-matcha mb-6" />
            <p className="text-xl text-center">
              We partner with <span className="text-sakura">small farms</span> across Japan to bring you tea that’s rich in <span className="text-matcha">heritage</span> and free from compromise. From <span className="text-kin">ethical sourcing</span> to <span className="text-sakura">minimal</span>, <span className="text-matcha">elegant packaging</span>, every detail honors the <span className="text-kin">calm</span> we stand for.
            </p>
          </div>
        </article>

        <figure className="h-full w-full">
          <img src={drinkinghojicha} alt="" className="h-full w-full object-cover" />
        </figure>
      </section>
    </>
  );
}

export default Info;
