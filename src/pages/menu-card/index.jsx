import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { publicRequest } from "@/config/axios.config";
import Image from "next/image";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [food, setFood] = useState([]);
  const [animationType, setAnimationType] = useState(1);
  const [cart, setCart] = useState([]);

  // Fetch Categories
  const fetchCategories = useCallback(async () => {
    try {
      const res = await publicRequest.get("category");
      if (res.status === 200) {
        setCategories(res?.data?.data);
        console.log(res?.data?.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  }, []);

  // Fetch All Food Items
  const fetchFood = useCallback(async () => {
    try {
      const res = await publicRequest.get("cook");
      if (res.status === 200) {
        setFood(res?.data?.data?.data);
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  }, []);

  // Fetch Food by Category
  const handleCategoryChange = async (id) => {
    try {
      const res = await publicRequest.get(`category/${id}`);
      if (res.status === 200) {
        setFood(res?.data?.data?.cooks || []);
        console.log("Filtered Food Items:", res?.data?.data?.cooks);
      }
    } catch (error) {
      console.error("Error fetching category:", error);
    }
    setSelectedCategory(id);
    setAnimationType(Math.floor(Math.random() * 3) + 1);
  };

  // Animation Config
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

  useEffect(() => {
    fetchCategories();
    fetchFood();
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <main className="bg-gray-900 min-h-screen">
      <div className="text-white container-custom py-10">
        {/* Header */}
        <div className="flex flex-col">
          <div className="flex justify-between">
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
          {/* "All" Button */}
          <button
            className={`px-4 py-2 md:px-6 md:py-3 rounded-lg transition duration-300 ${
              !selectedCategory ? "text-yellow-500" : "text-gray-300"
            }`}
            onClick={() => {
              setSelectedCategory(null);
              fetchFood(); // Fetch all food items
            }}
          >
            All
          </button>

          {/* Category-Specific Buttons */}
          {categories?.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-lg transition duration-300 ${
                selectedCategory === category?.category_id ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleCategoryChange(category?.category_id)}
            >
              {category?.category_name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-8">
          {food?.map((item, index) => (
            <Link href={`/food-details/${item?.cook_id}`} key={item?.cook_id}>
              <motion.div
                {...getAnimationProps(index)}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-center space-x-4"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden border-8 border-gray-800">
                  <Image
                    height={50}
                    width={50}
                    src={`${process.env.NEXT_PUBLIC_API_SERVER}${item?.cook_image}`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 border-gray-800 pb-2">
                  <div className="flex justify-between items-center">
                    <p className="bg-gray-800 text-white font-bold px-2 text-nowrap py-1">
                      {item?.cook_name}
                    </p>
                    <div className="border-b border-dashed border-gray-400 w-full"></div>
                    <span className="bg-gray-800 text-yellow-500 font-bold px-2 py-1">
                      {item?.price}
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
