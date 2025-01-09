import Cart from "@/components/cart";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Navigation from 'swiper/modules'
import { useRef } from "react";
import { PrimaryButton } from "@/components/button";
import Image from "next/image";

export default function Home() {
  const swiperRef = useRef(null);
  return (
    <div className="container-custom">
      <section className=" flex  flex-col-reverse lg:flex-row justify-around items-center  ">
        <div className="py-5 w-full lg:w-1/2">
          <h1 className="text-5xl font-bubblegum text-bold">
            We serve the test You love 😍
          </h1>
          <p className="pt-10 font-openSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            temporibus asperiores excepturi sapiente ipsa hic! Voluptas, nobis.
            Soluta iste labore ratione cumque necessitatibus. Id accusantium
            tempore quo assumenda! Quisquam, natus.
          </p>
          <div className="flex  gap-5 pt-10">
            <PrimaryButton name='Explore Food'/>
            <button className="px-5 py-2 border border-primary flex justify-center items-center gap-2 rounded-full"><FaSearch/> Search</button>
          </div>
        </div>
        <div className="py-10 relative">
  <Image className="rounded-full hidden lg:flex lg:w-3/4  h-full lg:h-[400px] w-auto" height={500} width={500} src={'/images/burger.webp'} alt="hero"/>
  
  <div className="absolute hidden top-1/2 h-96 transform -translate-y-1/2 right-0 lg:flex  flex-col gap-0 overflow-hidden">
    <Swiper
      spaceBetween={10}
      direction="vertical"
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={2000}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 4,
        },
      
      }}
    >
      {
        [...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <button className="flex rounded-full gap-1 items-center bg-white hover:bg-primary shadow-xl px-4 py-1">
              <Image className="rounded-full" height={50} width={50} src={'/images/burger.webp'} />
              Dishes
            </button>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </div>
</div>
      </section>
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
          modules={[Autoplay]} // Include Navigation in modules
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
