import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import japanabout from "../../../public/img/japanabout.webp";
import about1 from "../../../public/img/about1.webp";
import about2 from "../../../public/img/about2.webp";
import about3 from "../../../public/img/about3.webp";


function About() {
    return (
        <>
            <Navbar />
            <section className="bg-washi h-auto">
                <figure className="relative h-[40vh] w-full">
                    <img src={japanabout} alt="" className="h-full w-full object-cover" />
                </figure>
                <article className="absolute top-[20%] left-1/2 transform -translate-x-1/2 h-auto w-auto flex flex-col gap-8 text-black z-10">
                    <h1 className="text-[55px] font-bold font-roboto-condensed">About Us</h1>
                </article>
                <section className="grid grid-cols-2 grid-rows-3 gap-6 px-8 py-16 font-roboto-condensed bg-washi text-dark">
                    <figure className="h-[60vh]">
                        <img src={about1} alt="" className="w-full h-full object-cover rounded" />
                    </figure>
                    <article className="flex flex-col justify-center items-center text-center px-6">
                        <h2 className="text-5xl font-bold mb-8">
                            Rooted in <span className="text-matcha">Tradition</span>
                        </h2>
                        <p className="text-xl">
                            At Shizukana, we believe tea is more than just a beverage — it is a bridge between generations, a ritual of reflection, and a way to reconnect with nature. Our journey began with a simple idea: to preserve the serenity of Japanese tea culture and share it with the world. From hand-harvested leaves to timeless brewing practices, we stay true to the traditions that inspired us. Every cup is a quiet celebration of stillness. In a world that never stops, Shizukana invites you to slow down, breathe deeply, and find calm in every steep.
                        </p>
                    </article>
                    <article className="flex flex-col justify-center items-center text-center px-6">
                        <h2 className="text-5xl font-bold mb-8">
                            Honoring <span className="text-kin">Generations</span>
                        </h2>
                        <p className="text-xl">
                            Our teas are grown by farmers whose families have cultivated tea for centuries — many on the same land passed down through generations. These artisans have inherited not only fields, but a philosophy: one of patience, precision, and deep respect for the earth. At Shizukana, we honor this lineage by forming direct relationships with these growers, ensuring fair practices and a shared commitment to excellence. Every harvest reflects generations of knowledge, and we are proud to bring their life's work — their legacy — into your hands. It’s not just tea. It’s heritage in a cup.
                        </p>
                    </article>
                    <figure className="h-[60vh]">
                        <img src={about2} alt="" className="w-full h-full object-cover rounded" />
                    </figure>
                    <figure className="h-[60vh]">
                        <img src={about3} alt="" className="w-full h-full object-cover rounded" />
                    </figure>
                    <article className="flex flex-col justify-center items-center text-center px-6">
                        <h2 className="text-5xl font-bold mb-8">
                            Crafted with <span className="text-sakura">Care</span>
                        </h2>
                        <p className="text-xl">
                            Quality is never rushed. From the moment the leaves are picked to the moment they reach your teacup, every step in our process is intentional. We focus on small-batch production to ensure each variety retains its unique aroma, flavor, and character. Our packaging is minimal, sustainable, and designed to preserve freshness without excess. Whether you're enjoying a roasted hojicha after dinner or a delicate gyokuro on a quiet afternoon, know that every detail — from farm to finish — was guided by a desire to bring peace, balance, and authenticity to your tea ritual.
                        </p>
                    </article>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default About;
