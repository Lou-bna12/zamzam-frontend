import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md h-16 flex items-center px-6 justify-between">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Zam<span className="text-pink-600">Zam</span>
      </Link>

      {/* Menu */}
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/">Accueil</Link>
        <Link to="/login">Connexion</Link>
        <Link to="/register">Inscription</Link>
        <Link to="/dashboard">Tableau de bord</Link>
      </div>
    </nav>
  );
}
