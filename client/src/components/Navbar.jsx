import { Link } from "react-router-dom";

const Navbar = () => {
  return (
        <nav className="bg-gray-900/90 text-white shadow-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex h-20 items-center">
            {/* Logo on the left */}
            <Link to="/" className="flex items-center gap-3 flex-none">
            <img src="/favicon.ico" alt="Logo" className="h-12 w-12" />
            <div className="leading-tight">
                <span className="block text-2xl font-bold">Garret Tilton</span>
                <span className="block text-sm font-semibold text-gray-300">Portfolio</span>
            </div>
            </Link>
        </div>
        {/* Links outside container: spanning full width */}
        <div className="px-6 sm:px-8 lg:px-12">
            <div className="flex h-20 items-center justify-end gap-10">
            <Link to="/about" className="text-lg hover:text-gray-300">About</Link>
            <Link to="/projects" className="text-lg hover:text-gray-300">Projects</Link>
            <Link to="/resume" className="text-lg hover:text-gray-300">Resume</Link>
            <Link to="/contact" className="text-lg hover:text-gray-300">Contact</Link>
            </div>
        </div>
        </nav>
  );
};

export default Navbar;
