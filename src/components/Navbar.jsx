import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO MODERNE */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-[#1E3A8A]">Zam</span>
          <span className="text-[#FF8A00]">Zam</span>
        </Link>

        {/* MENUS - DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#FF8A00] transition"
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              className="flex items-center gap-1 hover:text-[#FF8A00] transition"
            >
              <FiUser /> Connexion
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="flex items-center gap-1 hover:text-[#FF8A00] transition"
            >
              <FiShoppingCart /> Panier
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              className="bg-[#FF8A00] text-white px-4 py-2 rounded-lg hover:bg-[#e67a00] transition"
            >
              S’inscrire
            </Link>
          </li>
        </ul>

        {/* BURGER MENU - MOBILE */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white shadow-lg rounded-b-xl px-6 py-4 flex flex-col gap-4 text-gray-700">

          <Link to="/" onClick={() => setOpen(false)} className="py-2 border-b hover:text-[#FF8A00] transition">
            Accueil
          </Link>

          <Link to="/login" onClick={() => setOpen(false)} className="py-2 border-b flex items-center gap-2 hover:text-[#FF8A00]">
            <FiUser /> Connexion
          </Link>

          <Link to="/cart" onClick={() => setOpen(false)} className="py-2 border-b flex items-center gap-2 hover:text-[#FF8A00]">
            <FiShoppingCart /> Panier
          </Link>

          <Link
            to="/register"
            onClick={() => setOpen(false)}
            className="text-center bg-[#FF8A00] text-white px-4 py-2 rounded-lg hover:bg-[#e67a00] transition"
          >
            S’inscrire
          </Link>

        </div>
      )}
    </header>
  );
}
