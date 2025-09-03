import { Link } from "react-router-dom";

const Navbar = () => {
  return (
        <nav className="bg-black text-white sticky top-0 z-50">
        <div className="flex h-20 items-center px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 flex-none">
            <img src="/favicon.ico" alt="Logo" className="h-12 w-12" />
            <div className="leading-tight">
            <span className="block text-2xl font-bold">Garret Tilton</span>
            <span className="block text-sm font-semibold text-gray-300">Portfolio</span>
            </div>
        </Link>

        {/* Internal Links */}
        <div className="flex-grow" />
        
        <div className="flex items-center gap-5">
            <Link to="/about" className="text-lg hover:text-gray-300">About</Link>
            <Link to="/projects" className="text-lg hover:text-gray-300">Projects</Link>
            <Link to="/resume" className="text-lg hover:text-gray-300">Resume</Link>
            <Link to="/contact" className="text-lg hover:text-gray-300">Contact</Link>
            <a href="https://github.com/Garret-Tilton/Personal-Portfolio" target="_blank" rel="noopener noreferrer">
              <img src="/github-mark-white.svg" alt="Github Logo" className="h-10 w-10 hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/garret-tilton-a936762a1" target="_blank" rel="noopener noreferrer">
              <img src="/InBug-White.png" alt="LinkedIn Logo" className="h-10 w-10 hover:opacity-80" />
            </a>
        </div>
        </div>

        </nav>
  );
};

export default Navbar;
