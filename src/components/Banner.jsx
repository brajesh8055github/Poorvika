import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="">
      <div className="gap-2 text-sm md:text-base">
        <Link to="/" className="text-black hover:underline p-2 font-bold border ">Mobile & Accessories</Link>
        <Link to="/" className="text-black hover:underline p-2 font-bold">Computer & Tablets</Link>
        <Link to="/" className="text-black hover:underline p-2 font-bold">TV & Audio</Link>
        <Link to="/" className="text-black hover:underline p-2 font-bold">Kitchen Appliances</Link>
        <Link to="/" className="text-black hover:underline p-2 font-bold">Home Appliances</Link>
        <Link to="/" className="text-black hover:underline p-2 font-bold">Smart Technology</Link>
        <Link to="/" className="text-black hover:underline p-2 font-bold">Personal & Health Care</Link>
      </div>

      {/* Banner Image */}
      <div>
        <img 
          src="./Images/Poorvika.webp" 
          alt="Poorvika Banner" 
          className="w-full h-full object-cover shadow-md"
        />
      </div>
    </div>
  );
}

export default Banner;
