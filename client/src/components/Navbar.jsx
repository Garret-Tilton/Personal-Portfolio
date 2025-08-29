import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white px-12 py-8 shadow-md">
            <div className="max-w-7x1 mx-auto flex justify-between items-center">
                <h1>
                    <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
                        <img src="/favicon.ico" alt="Logo" className="h-10 w-10" />
                        <div className="flex flex-col leading-tight">
                        <span>Garret Tilton</span>
                        <span className="text-sm font-bold">Portfolio</span>
                        </div>
                    </Link>
                </h1>
                <div className="space-x-8">
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