import { useState } from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold"> Tavern Coffee House ☕</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
          </li>
          <li>
            <Link to="/aboutUs" className="hover:text-yellow-400">About</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-yellow-400">Menu</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-yellow-400">Services</Link>
          </li>
          <li>
            <Link to="/galary" className="hover:text-yellow-400">Gallery</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black px-6 pb-4 space-y-4">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/aboutUs" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setOpen(false)}>Menu</Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/galary" onClick={() => setOpen(false)}>Galary</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
