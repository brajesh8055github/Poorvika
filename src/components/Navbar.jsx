import { useState } from "react";
import { Link } from "react-router-dom"
import logo from '../Photos/Poorvika-english-logo.svg'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useCart } from "./CartContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { totalItems } = useCart();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex items-center justify-between  bg-orange-500 shadow-md py-2">
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                <img src={logo} alt="Logo" className="h-10 w-auto" /></Link>
            </div>


            {/* Search Input */}
            <div className="hidden md:flex flex-1 mx-4">
                <input
                    type="text"
                    placeholder="Search for Products, Brands, Offers"
                    className="w-full px-4 py-2 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
            </div>

            <div className="hidden md:flex space-x-6 items-center">
                <Link to="/" className="text-white hover:text-gray-900">Delivery to <span>Patna</span></Link>
                <Link to="/" className="text-white hover:text-gray-900">Locate Stores</Link>
                <Link to="/cart" className="relative text-white hover:text-gray-900">
          <span className="text-lg">Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm rounded-full px-2 py-1">
              {totalItems}
            </span>
          )}
        </Link>
                <Link to="/" className="text-white hover:text-gray-900">My account</Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-2xl text-gray-700">
                    {menuOpen ? <IoClose /> : <TiThMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden">

                    <input
                        type="text"
                        placeholder="Search for Products, Brands, Offers"
                        className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 mb-4"
                    />
                    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Delivery to <span>Patna</span></Link>
                    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>About</Link>
                    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Locate Stores</Link>
                    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>0 Items</Link>
                    <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>My account</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;