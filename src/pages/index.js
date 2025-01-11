import Cart from "@/components/cart";
import {
  FaArrowCircleDown,
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaSearch,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Navigation from 'swiper/modules'
import { useRef, useState } from "react";
import { PrimaryButton } from "@/components/button";
import Image from "next/image";
import { MdBookOnline } from "react-icons/md";
import { serviceData } from "@/components/data";
export default function Home() {
  const swiperRef = useRef(null);
  const customerRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select Item"); // Track selected item
  const [modal, setModal] = useState(false);

  const handleSelect = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false); // Close dropdown after selection
  };
  const handleModal = () => {
    setModal(!modal);
    console.table(modal);
    console.log("clicked");
  };
  return (
    <div className="container-custom">
      {/* hero section */}
      <section className=" flex  flex-col lg:flex-row justify-between items-center  ">
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
            <PrimaryButton name="Explore Food" link="menu" />
            <button className="px-5 py-2 border border-primary flex justify-center items-center gap-2 rounded-full">
              <FaSearch /> Search
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center lg:pe-20  py-10 lg:py-20">
          <Image
            className="rounded-full h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]"
            height={500}
            width={500}
            src="/images/burger.webp"
            alt="hero"
          />

          <div className="absolute lg:top-1/2 lg:right-16 right-0 transform lg:-translate-y-1/2 lg:translate-x-20 h-64 lg:h-96 flex flex-col gap-2 overflow-hidden">
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
                0: {
                  slidesPerView: 4, // Small devices
                },
                640: {
                  slidesPerView: 5, // Larger devices
                },
              }}
            >
              {[...Array(6)].map((_, index) => (
                <SwiperSlide key={index}>
                  <button className="flex rounded-full gap-1 items-center bg-white hover:bg-primary shadow-xl px-3 py-1">
                    <Image
                      className="rounded-full"
                      height={50}
                      width={50}
                      src="/images/burger.webp"
                      alt="Dish"
                    />
                    <span className="inline-block">Dishes</span>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Populer dishesh seciton start from hare */}
      <section>
        <div className="flex justify-between items-center py-10">
          <h1 className="text-4xl font-bold font-bubblegum">Popular Dishes</h1>
          <div className="lg:flex hidden gap-4">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="border border-primary rounded-full p-2 hover:bg-primary hover:shadow-xl"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="border border-primary rounded-full p-2 hover:bg-primary hover:shadow-xl"
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
              <Cart handleModal={handleModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* service section */}
      <section className="flex justify-around items-center py-20 flex-col-reverse  md:flex-row gap-8 ">
        <div className="lg:w-1/2 w-full flex justify-center ">
          <Image
            height={400}
            width={400}
            src="/images/chef.webp"
            className="rounded-3xl"
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <h1 className="text-5xl font-bubblegum pb-5">
            We have Multiple Services
          </h1>
          <p className="text-sm font-openSans ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
            voluptatibus aut quis velit quidem. Ex facilis voluptas
            reprehenderit quasi consectetur placeat natus. Non, perferendis ut?
            Nobis maiores minima officiis dolor.
          </p>
          <div>
            <div className="grid grid-cols-2 gap-4 justify-between mt-10 pb-10">
              {serviceData?.map((data, index) => (
                <div key={data.name} className="flex items-center gap-4 ">
                  {" "}
                  {data?.logo}
                  <p className="text-sm font-bubblegum font-semibold ">
                    {data?.name}
                  </p>
                </div>
              ))}
            </div>
            <PrimaryButton name={"About Us"} link="/about-us" />
          </div>
        </div>
      </section>
      {/* Reguler menu section */}
      <section>
        <div className="flex justify-between relative items-center">
          <h1 className="text-4xl font-bold font-bubblegum lg:w-full md:text-center py-5 w-3/5">
            Our Reguler Menu Pack
          </h1>
          <div className="md:hidden absolute top-0 right-0 z-50">
            <button
              className="font-bubblegum border border-primary flex items-center justify-between gap-2 px-5 py-2 rounded-full hover:bg-primary w-full"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              {selectedItem} <FaChevronDown />
            </button>
            {dropdownOpen && (
              <div
                className="mt-2 border border-primary rounded-lg shadow-lg bg-white "
                role="listbox"
                aria-activedescendant={selectedItem}
              >
                {[...Array(8)].map((_, index) => {
                  const itemText = `Item ${index + 1}`;
                  return (
                    <button
                      key={index}
                      className={`block w-full text-left font-bubblegum border-b last:border-none border-gray-300 px-5 py-2 hover:bg-primary ${
                        selectedItem === itemText ? "bg-primary text-white" : ""
                      }`}
                      role="option"
                      aria-selected={selectedItem === itemText}
                      onClick={() => handleSelect(itemText)}
                    >
                      {itemText}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="py-5">
          {/* Dropdown button for small screens */}

          {/* Regular buttons for larger screens */}
          <div className="hidden md:flex justify-between ">
            {[...Array(8)].map((_, index) => (
              <button
                key={index}
                className="font-bubblegum border border-primary px-5 py-2 rounded-full hover:bg-primary"
              >
                Item {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <Swiper
            className="w-full mx-auto " // Ensure md:hidden is directly on this line
            spaceBetween={20}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <Cart handleModal={handleModal} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {[...Array(8)].map((_, index) => (
            <Cart key={index} handleModal={handleModal} />
          ))}
        </div>
      </section>
      {/* Reservation sectoion */}
      <section className=" flex  flex-col md:flex-row justify-center items-center lg:gap-4 ">
        <div className="py-5 w-full md:w-1/2">
          <h1 className="text-5xl font-bubblegum text-bold">
            Do You Have Any Dinner Plan Today? Resrve Your Table Today
          </h1>
          <p className="pt-10 font-openSans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            temporibus asperiores excepturi sapiente ipsa hic! Voluptas, nobis.
            Soluta iste labore ratione cumque necessitatibus.
          </p>
          <div className="flex  gap-5 pt-10">
            <PrimaryButton name="Make Reservation" link="reserve" />
          </div>
        </div>
        <div className="py-10 flex justify-center">
          <Image
            className="rounded-full h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] object-fit"
            height={500}
            width={500}
            src={"/images/burger.webp"}
            alt="hero"
          />
        </div>
      </section>
      {/* our chef */}
      <section className="py-5">
        <div className="flex justify-between items-center py-10">
          <h1 className="text-4xl font-bold font-bubblegum">Meet Our Chefs</h1>
          <div className="lg:flex gap-4 hidden">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="border border-primary rounded-full p-2 hover:bg-primary hover:shadow-xl"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="border border-primary rounded-full p-2 hover:bg-primary hover:shadow-xl"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <Swiper
          className="w-full mx-auto"
          spaceBetween={20}
          dir="ltr"
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
              <div className=" bg-white rounded-xl p-5">
                <div className="flex justify-center items-center ">
                  <Image
                    height={500}
                    width={300}
                    src={"/images/chef.webp"}
                    className="rounded-xl"
                  />
                </div>
                <p className="text-center  font-bubblegum leading-5 text-xl mt-4">
                  MR. Chef
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Customer Say section */}
      <section className="py-5">
        <div className="flex justify-between items-center py-10">
          <h1 className="text-4xl font-bold font-bubblegum">
            What Our Customer Sayes
          </h1>
          <div className="lg:flex  gap-4 hidden  ">
            <button
              onClick={() => customerRef.current?.slidePrev()}
              className="border border-primary rounded-full p-2 hover:bg-primary hover:shadow-xl"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => customerRef.current?.slideNext()}
              className="border border-primary rounded-full p-2 hover:bg-primary hover:shadow-xl"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <Swiper
          className="w-full mx-auto"
          spaceBetween={20}
          dir="LTR"
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
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className=" bg-[#f3dede] rounded-xl p-5">
                <p className="font-openSans">
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quas, facilis? Nulla amet soluta quis dolor labore eos,
                  excepturi consequuntur eaque, dignissimos rem aliquam!
                  Perspiciatis nobis sapiente quaerat ab suscipit voluptate!"
                </p>
                <div className="flex justify-start items-center mt-5 ">
                  <Image
                    height={50}
                    width={50}
                    src={"/images/chef.webp"}
                    className="rounded-full h-16 w-16"
                  />
                </div>
                <p className="text-start  font-bubblegum leading-5 text-xl mt-4">
                  MR. Chef
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => handleModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold">sendiwith</h2>
            <Image
              height={400}
              width={300}
              className="w-full object-cover h-40"
              src={'/images/burger.webp'}
              alt={'data'}
            />
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              fugit, fugiat id quisquam nobis eligendi ex aspernatur
              perspiciatis ab, temporibus saepe expedita eius quod tempore ipsa
              optio commodi harum unde.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">$450</span>
              <button
                onClick={() => handleModal(false)}
                className="border-2 border-primary px-4 py-2 rounded hover:bg-primary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
