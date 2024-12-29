import  { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "./Images/slider1.webp",
    "./Images/slider2.webp",
    "./Images/slider3.webp",
    "./Images/slider4.webp",
    "./Images/slider5.webp",
    "./Images/Poorvika.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
          className="bg-gray-800 text-white rounded-full p-2 shadow-lg"
        >
          &#10094;
        </button>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          className="bg-gray-800 text-white rounded-full p-2 shadow-lg"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;