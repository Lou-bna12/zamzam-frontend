import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 transform transition-all duration-500 animate-fadeIn">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#1E3A8A]">
          Créer un compte <span>ZamZam</span>
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-800">Nom complet</label>
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Email</label>
            <input
              type="email"
              placeholder="exemple@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-800">Mot de passe</label>
            <input
              type="password"
              placeholder="Votre mot de passe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8A00]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#FF8A00] text-white font-semibold hover:bg-[#e67a00] transition"
          >
            S’inscrire
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Déjà un compte ?{" "}
          <Link to="/login" className="text-[#1E3A8A] font-semibold hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
