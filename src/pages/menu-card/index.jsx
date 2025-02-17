import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    name: "Caesar Selections",
    category: "Salads",
    price: "$8.95",
    description: "Lorem, deren, trataro, filede, nerada",
    image: "/images/burger.webp",
  },
  {
    id: 2,
    name: "Greek Salad",
    category: "Starters",
    price: "$9.95",
    description: "Fresh spinach, crisp romaine, tomatoes, and Greek olives",
    image: "/images/burger.webp",
  },
  {
    id: 3,
    name: "Spinach Salad",
    category: "Salads",
    price: "$9.95",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
    image: "/images/burger.webp",
  },
  {
    id: 4,
    name: "Spinach Salad",
    category: "Specialty",
    price: "$9.95",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
    image: "/images/burger.webp",
  },
  {
    id: 5,
    name: "Spinach Salad",
    category: "Starters",
    price: "$9.95",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
    image: "/images/burger.webp",
  },
  {
    id: 6,
    name: "Spinach Salad",
    category: "Specialty",
    price: "$9.95",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
    image: "/images/burger.webp",
  },
  {
    id: 7,
    name: "Spinach Salad",
    category: "Salads",
    price: "$9.95",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
    image: "/images/burger.webp",
  },
];

const categories = ["All", "Starters", "Salads", "Specialty"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [animationType, setAnimationType] = useState(1); // Store single animation type for all items

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setAnimationType(Math.floor(Math.random() * 3) + 1); // 1, 2, or 3
  };

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const getAnimationProps = (index) => {
    switch (animationType) {
      case 2: // Slide-in
        return {
          initial: { opacity: 0, x: index % 2 === 0 ? 300 : -300, y: 300 },
          animate: { opacity: 1, x: 0, y: 0 },
        };
      case 1: // Scale-up
        return {
          initial: { opacity: 0, scale: 0.2 },
          animate: { opacity: 1, scale: 1 },
        };
      case 3: // Fade-in with rotation
      default:
        return {
          initial: {
            opacity: 0,
            scale: 0.5,
            y: index % 2 === 0 ? 100 : -100,
            x: index % 2 === 0 ? 100 : -100,
          },
          animate: { opacity: 1, scale: 1, y: 0, x: 0 },
        };
    }
  };
   const [cart, setCart] = useState([]);
 
   useEffect(() => {
     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
     setCart(storedCart);
   }, []);

  return (
    <main className="bg-gray-900 min-h-screen">
      <div className="text-white container-custom py-10">
        {/* Header */}
        <div className="flex flex-col">
          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 uppercase tracking-widest">
                Menu
              </span>
              <div className="w-16 border-t border-yellow-500"></div>
            </div>
            <Link
              href={"/my-cart"}
              className="relative bg-primary px-5 py-1 rounded-lg text-xl font-bold"
            >
              Cart
              {cart?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cart?.length}
                </span>
              )}
            </Link>
          </div>
          <h2 className="text-4xl font-semibold text-yellow-500 mt-2">
            Check Our Tasty Menu
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-lg mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg transition duration-300 ${
                selectedCategory === category
                  ? "text-yellow-500 "
                  : "text-gray-300"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <Link href={`/food-details/1`}>
              <motion.div
                key={item.id}
                {...getAnimationProps(index)}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center space-x-4"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-8 border-gray-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 border-gray-800 pb-2">
                  <div className="flex justify-between items-center">
                    <p className="bg-gray-800 text-white font-bold px-2 text-nowrap py-1">
                      {item.name}
                    </p>
                    <div className="border-b border-dashed border-gray-400 w-full"></div>
                    <span className="bg-gray-800 text-yellow-500 font-bold px-2 py-1">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-400 italic text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
