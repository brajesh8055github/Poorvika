import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const mobile = [
  { image: './Images/1.webp' },
  { image: './Images/2.webp' },
  { image: './Images/3.webp' },
  { image: './Images/4.webp' },
]

const products = [
  {
    id: 1,
    name: "Realme 14x 5G",
    description: "Golden Glow, 8GB-128GB",
    price: 15999,
    discount: "Save ₹2,000",
    image: "./Images/Phone1.png",
  },
  {
    id: 2,
    name: "Apple iPhone 16",
    description: "Teal, 128GB",
    price: 73999,
    discount: "Save ₹6,000",
    image: "./Images/Phone2.png",

  },
  {
    id: 3,
    name: "Redmi Note 14 Pro 5G",
    description: "Ivy Green, 8GB-256GB",
    price: 26999,
    discount: "Save ₹4,000",
    image: "./Images/Phone3.png",

  },
  {
    id: 4,
    name: "Samsung Galaxy S24 5G",
    description: "Marble Grey, 8GB-256GB",
    price: 79999,
    discount: "Save ₹4,000",
    image: "./Images/Phone4.png",

  },
  {
    id: 5,
    name: "Redmi Note 14 Pro Plus 5G",
    description: "Spectre Blue, 12GB-512GB",
    price: 35999,
    discount: "Save ₹4,000",
    image: "./Images/Phone5.png",

  },
  {
    id: 6,
    name: "Vivo Y300 5G",
    description: "Emerald Green, 8GB-128GB",
    price: 21999,
    discount: "Save ₹3,000",
    image: "./Images/Phone6.png",

  },
  {
    id: 7,
    name: "Vivo Y300 5G",
    description: "Emerald Green, 8GB-128GB",
    price: 21999,
    discount: "Save ₹3000",
    image: "./Images/Phone7.png",

  },
  {
    id: 8,
    name: "Apple iPhone 16",
    description: "Teal, 128GB",
    price: 73999,
    discount: "Save ₹6,000",
    image: "./Images/Phone2.png",

  },
  {
    id: 9,
    name: "Redmi Note 14 Pro 5G",
    description: "Ivy Green, 8GB-256GB",
    price: 26999,
    discount: "Save ₹4,000",
    image: "./Images/Phone3.png",

  },
  {
    id: 10,
    name: "Samsung Galaxy S24 5G",
    description: "Marble Grey, 8GB-256GB",
    price: 79999,
    discount: "Save ₹4,000",
    image: "./Images/Phone4.png",

  },
  {
    id: 11,
    name: "Redmi Note 14 Pro Plus 5G",
    description: "Spectre Blue, 12GB-512GB",
    price: 35999,
    discount: "Save ₹4,000",
    image: "./Images/Phone5.png",

  },
];

const Mobile = () => {
  const navigate = useNavigate();

  const CardHandler = (product) => {
    // navigate("/mobile-details", {
    navigate("/item-details", {
      state: {
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
      },
    });
  };

  const scrollLeft = () => {
    const container = document.querySelector(".laptop");
    container.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".laptop");
    container.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="flex flex-col md:flex-row md:justify-between items-center p-4 bg-gray-100">
          <header className="text-red-600 text-2xl font-bold mb-4 md:mb-0">
            Laptop & Tablets
          </header>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <Link to="/" className="hover:text-red-600 border-black border-r-2 px-2">
              Best Laptops
            </Link>
            <Link to="/" className="hover:text-red-600 border-black border-r-2 px-2">
              Desktop Pc
            </Link>
            <Link to="/" className="hover:text-red-600 border-black border-r-2 px-2">
              iPad & Tablets
            </Link>
            <Link to="/" className="hover:text-red-600">
              Accessories
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Laptops</h2>
        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Product Cards */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide laptop">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[200px] bg-white shadow-md rounded-md p-4 flex-shrink-0 cursor-pointer"
                onClick={() => CardHandler(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-md"
                />
                <h3 className="text-md font-semibold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-bold text-orange-500">
                    ₹{product.price}
                  </span>
                  <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Mobile;
