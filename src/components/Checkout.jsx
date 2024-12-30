import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalPrice = location.state?.total || 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = () => {
    const { name, email, phone, address } = formData;

    if (!name || !email || !phone || !address) {
      setError("All fields are required!");
      return;
    }

    setError("");
    setOrderPlaced(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };



  return (
    <>
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      {orderPlaced && (
        <div className="w-full max-w-md bg-green-100 text-green-800 px-4 py-2 rounded-lg mb-4 text-center">
          Your order has been placed successfully!
        </div>
      )}
      {error && (
        <div className="w-full max-w-md bg-red-100 text-red-800 px-4 py-2 rounded-lg mb-4 text-center">
          {error}
        </div>
      )}
      <div className="w-full md:w-1/2 bg-cover bg-center  rounded-lg shadow-lg flex flex-col justify-between ">

        <div className="relative text-center">
          <h3 className="text-2xl font-semibold ">Order Summary</h3>
          <p className=" text-lg text-green-500">
            <strong>Total Amount:</strong> ₹{totalPrice}
          </p>
        </div>
      </div>

      {/* Checkout Form */}
      <form className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter your address"
          ></textarea>
        </div>
        <button
          type="button"
          className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </form>
    </div>
    </>
  );
};

export default Checkout;