import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="w-full">
      <div className="text-sm flex flex-wrap justify-between gap-2 md:gap-4 lg:gap-6">
        <Link
          to="/mobiles"
          className="text-black hover:underline px-2 py-2 font-bold whitespace-nowrap"
        >
          Mobile & Accessories
        </Link>
        <Link
          to="/computers"
          className="text-black hover:underline px-2 py-2 font-bold whitespace-nowrap"
        >
          Computer & Tablets
        </Link>
        <Link
          to="/"
          className="text-black hover:underline px-2 py-2 font-bold whitespace-nowrap"
        >
          TV & Audio
        </Link>
        <Link
          to="/"
          className="text-black hover:underline px-2 py-2 font-bold whitespace-nowrap"
        >
          Kitchen Appliances
        </Link>
        <Link
          to="/"
          className="text-black hover:underline px-2 py-2 font-bold whitespace-nowrap"
        >
          Home Appliances
        </Link>
        <Link
          to="/"
          className="text-black hover:underline px-2 py-2 font-bold whitespace-nowrap"
        >
          Smart Technology
        </Link>
        <Link
          to="/"
          className="text-black hover:underline px-2 py-2 font-bold whitespace-nowrap"
        >
          Personal & Health Care
        </Link>
      </div>

      {/* Banner Image */}
      <div>
        <img
          src="./Images/Poorvika.webp"
          alt="Poorvika Banner"
          className="w-full h-auto object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default Banner;
