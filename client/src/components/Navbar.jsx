import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
        <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
        <div className="flex h-20 items-center px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <HashLink smooth to="/#home" className="flex items-center gap-3 flex-none">
          <img src="/favicon.ico" alt="Logo" className="h-12 w-12" />
          <div className="leading-tight">
            <span className="block text-2xl font-bold">Garret Tilton</span>
            <span className="block text-sm font-semibold text-gray-300">Portfolio</span>
          </div>
        </HashLink>
        {/* Currently does not link to the very top but slightly below */}

        <div className="flex-grow" />

        {/* Internal Links */}
        
        <div className="flex items-center gap-5">
            <HashLink smooth to="/#about" className="text-lg hover:text-gray-300">About</HashLink>
            <HashLink to="/#projects" className="text-lg hover:text-gray-300">Projects</HashLink>
            <HashLink to="/#resume" className="text-lg hover:text-gray-300">Resume</HashLink>
            <HashLink to="/#contact" className="text-lg hover:text-gray-300">Contact</HashLink>

        {/* External Links */}
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
