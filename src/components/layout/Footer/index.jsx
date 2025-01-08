import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Foooter = () => {
  return (
    <footer className="border-t-4 container-custom" >
        <div className="]  mt-5 ">
        <div className="flex justify-start items-center border-b-2 border-b-gray-400 pb-5 mb-10 ">
            <div>
                <Image height={400} width={400} src={'/logo.webp'} className="w-20 "/>
            </div>
            <h1 className="text-2xl">Bites</h1>
        </div>
        
      <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-5 container mx-auto">
        <div className="flex justify-center">
          <div className="text-start">
            <h1 className="text-xl font-semibold">Subscribe Our <br /> Newsletter</h1>
            <div className="flex gap-5 items-center justify-center">
              <input
                type="email"
                name=""
                id=""
                className="outline-none px-2 py-1 bg-[#f8eded] border-b-2 border-primary "
                placeholder="enter Your Email "
              />
              <button className="border  rounded-full  bg-primary p-2 ">
                <FaArrowRight />
              </button>
            </div>
            <div>
              <div className="py-5">
                <p className="flex text-5xl  gap-2 ">
                  <Link href="https://facebook.com">
                    <FaFacebookF className=" border-black border rounded-full  p-2  hover:bg-primary hover:border-none" />
                  </Link>
                  <Link href="https://linkedin.com">
                    <FaTwitter className=" border-black border rounded-full  p-2 hover:bg-primary hover:border-none" />
                  </Link>
                  <Link href="https://instagram.com">
                    <FaInstagramSquare className=" border-black border rounded-full  p-2 hover:bg-primary hover:border-none" />
                  </Link>
                  <Link href="https://twitter.com">
                    <FaYoutube className=" border-black border rounded-full  p-2 hover:bg-primary hover:border-none" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-start">
            <h1 className=" leading-[14px] pb-8 text-xl font-semibold text-black">
              Service
            </h1>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Onlice Order
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Pre Reservation
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              24/7 services
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Foodie Place
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Super chefs
            </p>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="text-start">
            <h1 className="text-xl font-semibold leading-[14px] pb-8  text-black">
              Quick Links
            </h1>
            <p>
              <Link
                href="/menu"
                className="font-medium text-sm leading-8 text-[#AAAAAA]"
              >
                Menu
              </Link>
            </p>
            <p>
              {" "}
              <Link
                href="/reviews"
                className="font-medium text-sm leading-8 text-[#AAAAAA]"
              >
                Reviews
              </Link>
            </p>
            <p>
              <Link
                href="/blog"
                className="font-medium text-sm leading-8 text-[#AAAAAA]"
              >
                Blogs
              </Link>
            </p>
            <p>
              <Link
                href={"reserve"}
                className="font-medium text-sm leading-8 text-[#AAAAAA]"
              >
                Reserve Table
              </Link>
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Other Foods
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-start">
            <h1 className="text-xl font-semibold leading-[14px] pb-8  text-black">
              About
            </h1>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Our Story
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Benifits
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Career
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Our Chefs
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Others
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-start">
            <h1 className=" leading-[14px] pb-8 text-xl font-semibold text-black">
              Help
            </h1>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Contact
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">
              Suppport
            </p>
            <p className="font-medium text-sm leading-8 text-[#AAAAAA]">FAQ</p>
          </div>
        </div>
      </div>

      
    </div>
    </footer>
  );
};

export default Foooter;
