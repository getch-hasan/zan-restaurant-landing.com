import Cart from "@/components/cart";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Navigation from 'swiper/modules'
import { useRef } from "react";

export default function Home() {
  const swiperRef = useRef(null);
  return (
    <div className="container-custom">
      {/* Populer dishesh seciton start from hare */}
      <section>
        <div className="flex justify-between items-center py-10">
          <h1 className="text-4xl font-bold font-bubblegum">Popular Dishes</h1>
          <div className="flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="border border-primary rounded-full p-2 hover:bg-primary"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="border border-primary rounded-full p-2 hover:bg-primary"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <Swiper
          className="w-full mx-auto"
          spaceBetween={20}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay ]} // Include Navigation in modules
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} 
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <Cart />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
