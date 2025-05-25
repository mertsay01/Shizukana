import { Link } from "react-router-dom";
import logo from "../../../public/img/shizukana_logo.webp";

function Footer() {
  return (
    <>
      <footer className="h-[35vh] bg-washi flex justify-center items-center text-black font-roboto-condensed">
        <div className="w-[80%] h-[80%] flex justify-center items-center gap-16 flex-wrap">
          <article className="h-[80%] w-[20%] flex flex-col gap-4">
            <figure className="h-[30%] flex items-center justify-center">
              <img src={logo} alt="" className="h-[150px] object-contain" />
            </figure>
            <p className="text-lg leading-relaxed text-center">
              A journey of <span className="text-sakura">serenity</span> and{" "}
              <span className="text-kin">craft</span>. <br />
              Rooted in <span className="text-matcha">Japanese tradition</span>, poured into every cup.
            </p>
          </article>

          <article className="h-[80%] w-[20%] flex items-center flex-col gap-4 text-center">
            <nav className="mt-4">
              <h5 className="text-xl font-semibold mb-3 text-kin">Explore</h5>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="hover:underline">Shop</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">About Us</Link>
                </li>
              </ul>
            </nav>
          </article>

          <article className="h-[80%] w-[20%] flex items-center flex-col gap-4 text-center">
            <nav className="mt-4">
              <h5 className="text-xl font-semibold mb-3 text-sakura">Support</h5>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="hover:underline">FAQ</Link>
                </li>
                <li>
                  <Link to="/shipping" className="hover:underline">Shipping & Returns</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">Contact Us</Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
                </li>
              </ul>
            </nav>
          </article>
        </div>
      </footer>
    </>
  );
}

export default Footer;
