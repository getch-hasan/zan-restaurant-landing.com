import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaStar, FaClock, FaPlus, FaMinus, FaCheck } from "react-icons/fa";

export default function FoodDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState({});
  const [selectedVariation, setSelectedVariation] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const variations = [
    { id: "small", label: "Small", price: 480 },
    { id: "medium", label: "Medium", price: 960 },
  ];

  const extras = [
    { id: 1, name: "Mushroom - 50gm", price: 25, image: "/mushroom.jpg" },
    { id: 2, name: "Mayonnaise - 1/4 cup", price: 20, image: "/mayonnaise.jpg" },
    { id: 3, name: "Peeled boiled egg", price: 15, image: "/boiled-egg.jpg" },
  ];

  const toggleExtra = (id) => {
    setSelectedExtras((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const updateQuantity = (type) => {
    setQuantity((prev) => (type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    if (!selectedVariation) return;

    const selectedExtrasArray = extras.filter((item) => selectedExtras[item.id]);

    const newCartItem = {
      id: Date.now(),
      name: "Italian Hot Pizza",
      variation: selectedVariation,
      quantity,
      extras: selectedExtrasArray,
      totalPrice:
        (variations.find((v) => v.id === selectedVariation)?.price || 0) +
        selectedExtrasArray.reduce((sum, item) => sum + item.price, 0),
    };

    const updatedCart = [...cart, newCartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container-custom mt-16 p-6 rounded-2xl  border-2  w-full max-w-4xl transition-all duration-300">
      {/* Desktop Layout: Two-column design */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image */}
        <div>
          <Image height={500} width={1000} src="/images/pizza.webp" alt="Italian hot pizza" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md" />
        </div>

        {/* Right: Food Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Italian Hot Pizza</h2>
          <div className="flex items-center text-gray-500 mt-2">
            <span className="mr-2 text-sm">🍕 Pizza Italian</span>
            <FaStar className="text-yellow-400" />
            <span className="ml-1 text-sm">4.8 (2.2k reviews)</span>
          </div>

          <div className="flex items-center justify-between mt-5 text-gray-600">
            <p className="text-md font-semibold">Details</p>
            <div className="flex items-center">
              <FaClock className="text-gray-500 mr-1" />
              <span className="text-sm">15 min</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            1 1/2 cups (355 ml) warm water (105°F-115°F), 1 package (2 1/4 teaspoons) active dry yeast, 3/4 cups (490g) bread flour...
          </p>

          {/* Variation Selection */}
          <div className="bg-gray-100 p-5 rounded-lg mt-6">
          
          <div className="flex items-center justify-between mb-3">
  <p className="text-lg font-semibold text-gray-900">Variation</p>
  <span
    className={`text-xs px-3 py-1 rounded-full font-semibold ${
      selectedVariation ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }`}
  >
    {selectedVariation ? "Complete" : "Required"}
  </span>
</div>

            <div className="space-y-3 mt-3">
              {variations.map((variation) => (
                <label key={variation.id} className="flex items-center justify-between hover:bg-slate-200 bg-slate-50 p-3 rounded-lg  cursor-pointer  transition">
                  <div className="flex items-center space-x-3">
                    <input type="radio" name="variation" value={variation.id} checked={selectedVariation === variation.id} onChange={() => setSelectedVariation(variation.id)} className="w-5 h-5 accent-primary" />
                    <span className="text-gray-700 font-medium">{variation.label}</span>
                  </div>
                  <span className="text-gray-900 font-semibold">Tk {variation.price}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Bought Together */}
      <div className="mt-8">
        <p className="text-lg font-semibold text-gray-900">Frequently bought together</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          {extras.map((item) => (
            <label key={item.id} className="flex items-center justify-between bg-gray-200 p-3 rounded-lg cursor-pointer transition">
              <div className="flex items-center space-x-2">
                <input type="checkbox" checked={selectedExtras[item.id] || false} onChange={() => toggleExtra(item.id)} className="hidden" />
                <div className="w-5 h-5 flex items-center justify-center border border-gray-300 rounded-md transition-all duration-200">
                  {selectedExtras[item.id] && <FaCheck className="text-primary " />}
                </div>
                <Image src={'/images/pizza.webp'} alt={item.name} width={40} height={40} className="w-10 h-10 rounded-md object-cover" />
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900 text-nowrap ">+ Tk {item.price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex items-center gap-3 mt-6">
        {/* Quantity Selector */}
        <div className="flex items-center border px-4 py-2 rounded-lg">
          <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition" onClick={() => updateQuantity("decrease")}>
            <FaMinus className="text-gray-700" />
          </button>
          <span className="mx-4 text-lg font-semibold text-gray-900">{quantity}</span>
          <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition" onClick={() => updateQuantity("increase")}>
            <FaPlus className="text-gray-700" />
          </button>
        </div>

        {/* Add to Cart */}
        <button onClick={addToCart} disabled={!selectedVariation} className={`w-full py-3 rounded-lg font-semibold text-lg transition ${selectedVariation ? "bg-black text-white hover:bg-primary" : "bg-gray-400 cursor-not-allowed"}`}>
          Add to Cart
        </button>
        <Link href={'/my-cart'} className="w-full relative text-center bg-primary rounded-lg font-semibold text-lg py-3">View Cart
        {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart?.length}
                </span>
              )} </Link>
        
      </div>
      
    </div>
  );
}
