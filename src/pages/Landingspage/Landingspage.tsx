import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Bestsellers from "../../components/Bestsellers/Bestsellers";
import Info from "../../components/Info/Info";
import Discoverteas from "../../components/Discoverteas/Discoverteas";
import Aboutpreview from "../../components/Aboutpreview/Aboutpreview";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import matcha from "../../../public/img/japanese-tea-farm.webp";

function Landingspage() {
    return (
        <>
            <Navbar />
            <section className="relative h-[85vh] mt-20">
                <figure className="h-full w-full">
                    <img src={matcha} alt="" className="h-full w-full object-cover" />
                </figure>
                <article className="absolute top-30 left-30 h-auto w-auto flex flex-col gap-8 text-black">
                    <h1 className="text-[55px] font-extrabold">
                        <span className="text-kin">Experience</span> the Tranquility of <span className="text-sakura">Japanese</span> <span className="text-matcha">Tea</span> Culture
                    </h1>
                    <p className="text-3xl">
                        Handcrafted <span className="text-matcha">Matcha</span> tools, <span className="text-kin">Traditional</span><span className="text-matcha"> Tea</span> sets, and <span className="text-sakura">Pure Flavors</span>.
                    </p>
                    <Link to="/shop" className="block w-64">
                        <button className="h-15 w-64 text-xl rounded bg-button-green hover:bg-button transition duration-300 cursor-pointer font-roboto-condensed font-semibold">
                            Start Your Tea Journey
                        </button>
                    </Link>
                </article>
            </section>
            <Bestsellers />
            <Info />
            <Discoverteas />
            <Aboutpreview />
            <Gallery />
            <Footer />
        </>
    );
}

export default Landingspage;
