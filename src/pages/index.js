import Cart from "@/components/cart";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container-custom">
      <section>
        <div className="flex justify-between items-center py-10">
          <h1 className="text-4xl font-bold ">Populer Dishes</h1>
          <div className="flex gap-4 ">
            <button className="border border-primary rounded-full p-2 hover:bg-primary">
              <FaArrowLeft />
            </button>
            <button className="border border-primary rounded-full p-2 hover:bg-primary">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          <Cart/>
        </div>
      </section>
    </div>
  );
}
