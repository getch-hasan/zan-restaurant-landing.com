import { useState, useEffect } from "react";
import Image from "next/image";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function MyCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, type) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto mt-16 px-4 py-10 md:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty. Start shopping now!</p>
      ) : (
        <div className="space-y-6 max-w-4xl mx-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-lg border border-gray-200 rounded-xl gap-6 hover:shadow-xl transition"
            >
              {/* Image & Details */}
              <div className="flex flex-col md:flex-row items-center space-x-4 w-full sm:w-auto">
                <Image
                  src="/images/pizza.webp"
                  width={180}
                  height={120}
                  className="rounded-md object-cover"
                  alt={item.name}
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Variation: <span className="font-medium text-gray-800">{item.variation}</span>
                  </p>
                  {item.extras.length > 0 && (
                    <p className="text-sm text-gray-500">
                      Extras: <span className="text-gray-700">{item.extras.map((extra) => extra.name).join(", ")}</span>
                    </p>
                  )}
                  <p className="text-lg font-bold text-gray-900 mt-2">Tk {item.totalPrice * item.quantity}</p>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border px-4 py-2 rounded-lg bg-gray-100">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="p-2 rounded-md hover:bg-gray-200 transition"
                  >
                    <FaMinus className="text-gray-700" />
                  </button>
                  <span className="mx-3 text-lg font-semibold text-gray-900">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="p-2 rounded-md hover:bg-gray-200 transition"
                  >
                    <FaPlus className="text-gray-700" />
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 transition bg-red-100 hover:bg-red-200 p-2 rounded-lg"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
