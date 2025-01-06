import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../Photos/Poorvika-english-logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = useSelector((state) => state.cart.totalItems);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate("/item-details", { state: { query: searchQuery } });
      setSearchQuery("");
    }
  };

  return (
    <nav className="flex items-center justify-between bg-orange-500 shadow-md py-2">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>
      <div className="hidden md:flex flex-1 mx-4 relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Products, Brands, Offers"
          className="w-full px-4 py-2 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
        />
        <AiOutlineSearch
          onClick={handleSearch}
          className="absolute right-4 top-2 text-xl text-gray-500 cursor-pointer"
        />
      </div>
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" className="text-white hover:text-gray-900">
          Delivery to <span>Patna</span>
        </Link>
        <Link to="/" className="text-white hover:text-gray-900">
          Locate Stores
        </Link>
        <Link to="/cart" className="relative text-white hover:text-gray-900">
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm rounded-full px-2 py-1">
              {totalItems}
            </span>
          )}
        </Link>
        <Link to="/login" className="text-white hover:text-gray-900">
          My account
        </Link>
      </div>
      <button onClick={toggleMenu} className="md:hidden text-2xl">
        {menuOpen ? <IoClose /> : <TiThMenu />}
      </button>

            {/* Mobile Menu */}
            {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-start p-4 space-y-4 md:hidden z-10">
          {/* Input */}
          <div className="md:flex flex-1 relative w-full md:w-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for Products, Brands, Offers"
              className="w-full md:w-64 px-4 py-2 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
            />
            <AiOutlineSearch
              onClick={handleSearch}
              className="absolute right-4 top-2 text-xl text-gray-500 cursor-pointer"
            />
          </div>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Delivery to <span>Patna</span></Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>Locate Stores</Link>
          <Link to="/cart" className="relative text-gray-700 hover:text-gray-900">
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm rounded-full px-2 py-1">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-gray-900" onClick={toggleMenu}>My account</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
