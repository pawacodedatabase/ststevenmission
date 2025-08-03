import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center  justify-between p-4 bg-white border-b sticky top-0 z-10">
      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-800"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full-screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0  bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <X size={32} />
          </button>
          <Link to="/" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/oluwaseun" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Oluwaseun Parish</Link>
          <Link to="/true-vine" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>True Vine Parish</Link>
              </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/oluwaseun" className="hover:text-purple-600">Oluwaseun Parish</Link>
        <Link to="/true-vine" className="hover:text-purple-600">True Vine Parish</Link>
         </nav>

      {/* Logo on the right */}
      <div className="text-xl font-bold text-purple-700"> <Link to={'/'}><img src={logo} width={100} /></Link></div>
    </header>
  );
};

export default Header;
