import { Link } from "react-router-dom";
import logo from "../../../public/img/shizukana_logo.webp";

function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 z-500 bg-washi h-20 w-full flex justify-center items-center">
        <div className="w-9/10 flex items-center justify-between">
          <Link to="/">
            <div className="shrink-0">
              <img src={logo} alt="Shizukana logo" className="h-50 w-auto" />
            </div>
          </Link>

          <nav className="flex gap-12 text-[19px] justify-center text-black font-roboto-condensed uppercase tracking-wide">
            <Link to="/shop" className="group relative inline-block">
              Shop
              <span className="absolute left-0 bottom-0 h-[3px] w-full bg-matcha scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </Link>
            <Link to="/about" className="group relative inline-block">
              About
              <span className="absolute left-0 bottom-0 h-[3px] w-full bg-matcha scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </Link>
            <Link to="/contact" className="group relative inline-block">
              Contact
              <span className="absolute left-0 bottom-0 h-[3px] w-full bg-matcha scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </Link>
          </nav>

          <div className="text-4xl ml-60">
            <Link to="/cart">🛒</Link> {/* pas aan naar gewenste route */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
