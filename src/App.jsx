import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import Galary from "./pages/galary";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/galary" element={<Galary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
