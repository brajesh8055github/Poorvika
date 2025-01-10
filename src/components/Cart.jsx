import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../components/cartSlice";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalCartPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleCheckout = () => {
    navigate("/checkout", { state: { total: totalCartPrice } });
  };

  return (
    <>
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-lg text-gray-700 text-center">Your cart is empty!</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md rounded-lg space-y-4 md:space-y-0"
                >
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain rounded-md"
                  />

                  {/* Item Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                    <p className="text-gray-700">Total Price: ₹{item.totalPrice}</p>
                  </div>

                  {/* Increment/Decrement Buttons */}
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantityChange: -1,
                            price: item.price,
                          })
                        )
                      }
                      className="px-3 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantityChange: 1,
                            price: item.price,
                          })
                        )
                      }
                      className="px-3 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() =>
                      dispatch(removeFromCart({ id: item.id, price: item.price }))
                    }
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Checkout Button */}
            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold">
                Total Cart Price: ₹{totalCartPrice}
              </h2>
              <button
                onClick={handleCheckout}
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
