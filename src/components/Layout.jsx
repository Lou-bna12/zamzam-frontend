import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* NAVBAR */}
      <Navbar />

      {/* CONTENU DES PAGES */}
      <main className="flex-1 px-4 py-6">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
