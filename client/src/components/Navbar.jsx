import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-3 shadow-md">
            <div className="max-w-7x1 mx-auto flex justify-between items-center">
                <h1 className="text-x1 font-bold">My Portfolio</h1>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                    <Link to="/projects" className="hover:text-gray-300">Projects</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;