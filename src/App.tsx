import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTo from "./components/ScrollTo/ScrollTo";
import Landingspage from "./pages/Landingspage/Landingspage";
import Shop from "./pages/Shop/Shop";
import ProductDetail from "./pages/Productdetail/Productdetail";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";
import Shipping from "./pages/Shipping/Shipping";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";

function App() {
  return (
    <BrowserRouter basename="/shizukana">
      <ScrollTo />
      <Routes>
        <Route path="/" element={<Landingspage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
