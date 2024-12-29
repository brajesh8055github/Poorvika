import { Link } from "react-router-dom";
// const mobile=[
//     {image:'./Images/Lap1.webp'},
//     {image:'./Images/Lap2.webp'},
//     {image:'./Images/3.webp'},
//     {image:'./Images/4.webp'},
// ]

// const products = [
//   {
//     id: 1,
//     name: "Realme 14x 5G",
//     description: "Golden Glow, 8GB-128GB",
//     price: "₹15,999",
//     discount: "Save ₹2,000",
//     image: "./Images/Phone1.png",
//   },
//   {
//     id: 2,
//     name: "Apple iPhone 16",
//     description: "Teal, 128GB",
//     price: "₹73,999",
//     discount: "Save ₹6,000",
//     image: "./Images/Phone2.png",

//   },
//   {
//     id: 3,
//     name: "Redmi Note 14 Pro 5G",
//     description: "Ivy Green, 8GB-256GB",
//     price: "₹26,999",
//     discount: "Save ₹4,000",
//     image: "./Images/Phone3.png",

//   },
//   {
//     id: 4,
//     name: "Samsung Galaxy S24 5G",
//     description: "Marble Grey, 8GB-256GB",
//     price: "₹79,999",
//     discount: "Save ₹4,000",
//     image: "./Images/Phone4.png",

//   },
//   {
//     id: 5,
//     name: "Redmi Note 14 Pro Plus 5G",
//     description: "Spectre Blue, 12GB-512GB",
//     price: "₹35,999",
//     discount: "Save ₹4,000",
//     image: "./Images/Phone5.png",

//   },
//   {
//     id: 6,
//     name: "Vivo Y300 5G",
//     description: "Emerald Green, 8GB-128GB",
//     price: "₹21,999",
//     discount: "Save ₹3,000",
//     image: "./Images/Phone6.png",

//   },
//   {
//     id: 7,
//     name: "Vivo Y300 5G",
//     description: "Emerald Green, 8GB-128GB",
//     price: "₹21,999",
//     discount: "Save ₹3,000",
//     image: "./Images/Phone7.png",

//   },
// ];

const products = [
    {
      id: 1,
      name: "Apple MacBook Air M2",
      description: "Space Gray, 8GB-256GB SSD",
      price: "₹99,999",
      discount: "Save ₹5,000",
      image: "./Images/Laptop1.png",
    },
    {
      id: 2,
      name: "Dell XPS 13",
      description: "Platinum Silver, 16GB-512GB SSD",
      price: "₹1,29,999",
      discount: "Save ₹10,000",
      image: "./Images/Laptop2.png",
    },
    {
      id: 3,
      name: "HP Spectre x360",
      description: "Nightfall Black, 16GB-1TB SSD",
      price: "₹1,45,999",
      discount: "Save ₹8,000",
      image: "./Images/Laptop3.png",
    },
    {
      id: 4,
      name: "Lenovo ThinkPad X1 Carbon",
      description: "Carbon Black, 16GB-512GB SSD",
      price: "₹1,39,999",
      discount: "Save ₹7,000",
      image: "./Images/Laptop4.png",
    },
    {
      id: 5,
      name: "Asus ROG Zephyrus G14",
      description: "Eclipse Gray, 16GB-1TB SSD",
      price: "₹1,49,999",
      discount: "Save ₹10,000",
      image: "./Images/Laptop5.png",
    },
    {
      id: 6,
      name: "Acer Swift 5",
      description: "Mist Green, 16GB-512GB SSD",
      price: "₹89,999",
      discount: "Save ₹6,000",
      image: "./Images/Laptop6.png",
    },
    {
      id: 7,
      name: "MSI Stealth 15M",
      description: "Camo Green, 16GB-1TB SSD",
      price: "₹1,35,999",
      discount: "Save ₹9,000",
      image: "./Images/Laptop7.png",
    },
    {
        id: 4,
        name: "Lenovo ThinkPad X1 Carbon",
        description: "Carbon Black, 16GB-512GB SSD",
        price: "₹1,39,999",
        discount: "Save ₹7,000",
        image: "./Images/Laptop8.jpeg",
      },
  ];
  

const Laptop = () => {
  return (
<>
<div className="bg-gray-100">
<div className="flex flex-col md:flex-row md:justify-between items-center p-4 bg-gray-100">
  {/* Header Title */}
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
    <Link to="/" className="hover:text-red-600 ">
      Accessories
    </Link>
  </div>
</div>
<div className="bg-gray-100 p-4">
  {/* Main Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Top Left and Top Right */}
    <div className="grid grid-cols-1 gap-4">
      <img
        src="./Images/Lap1.webp"
        alt="Laptop 1"
        className="rounded-lg shadow-lg object-cover w-full"
      />
      <img
        src="./Images/Lap2.webp"
        alt="Laptop 2"
        className="rounded-lg shadow-lg object-cover w-full"
      />
    </div>

    {/* Center Large Image */}
    <div className="flex items-center justify-center">
      <img
        src="./Images/Lap4.webp"
        alt="Laptop 3"
        className="rounded-lg shadow-lg object-cover w-full h-full "
      />
    </div>

    {/* Bottom Left and Bottom Right */}
    <div className="grid grid-cols-1 gap-4">
      <img
        src="./Images/Lap3.webp"
        alt="Laptop 4"
        className="rounded-lg shadow-lg object-cover w-full"
      />
      <img
        src="./Images/Lap5.webp"
        alt="Laptop 5"
        className="rounded-lg shadow-lg object-cover w-full"
      />
    </div>
  </div>
</div>

  </div>

<div className="p-4">
  <h2 className="text-xl font-bold mb-4">Laptops</h2>
  <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
    {products.map((product) => (
      <div
        key={product.id}
        className="min-w-[200px] bg-white shadow-md rounded-md p-4 flex-shrink-0"
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
            {product.price}
          </span>
          <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
            {product.discount}
          </span>
        </div>
      </div>
    ))}
  </div>
</div>




    </>
  );
};

export default Laptop;