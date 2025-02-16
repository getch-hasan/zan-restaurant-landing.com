import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" container-custom py-5">
      <div className="]  mt-5 ">
        <div className="flex justify-start items-center border-b-2 border-b-gray-400 pb-5 gap-4  mb-10 ">
          <div>
            <Image
              height={400}
              width={400}
              src={"/logo.webp"}
              className="w-20 "
            />
          </div>
          <h1 className="text-2xl font-semibold font-bubblegum ">Bites</h1>
        </div>

        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 container mx-auto">
          <div className="flex md:justify-center justify-start ">
            <div className="text-start">
              <h1 className="text-xl font-semibold py-2 font-bubblegum ">
                Subscribe Our <br /> Newsletter
              </h1>
              <div className="flex gap-5 items-center justify-center">
                <input
                  type="email"
                  name=""
                  id=""
                  className="outline-none px-2 py-1 font-openSans bg-[#f8eded] border-b-2 border-primary "
                  placeholder="enter Your Email "
                />
                <button className="border  rounded-full shadow-xl bg-primary p-2 ">
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

          <div className="flex md:justify-center justify-start">
            <div className="text-start">
              <h1 className=" leading-[14px] pb-8 text-xl font-semibold font-bubblegum text-black">
                Service
              </h1>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Onlice Order
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Pre Reservation
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                24/7 services
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Foodie Place
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Super chefs
              </p>
            </div>
          </div>

          <div className="flex md:justify-center justify-start ">
            <div className="text-start">
              <h1 className="text-xl font-semibold leading-[14px] pb-8 font-bubblegum  text-black">
                Quick Links
              </h1>
              <p>
                <Link
                  href="/menu"
                  className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]"
                >
                  Menu
                </Link>
              </p>
              <p>
                {" "}
                <Link
                  href="/reviews"
                  className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]"
                >
                  Reviews
                </Link>
              </p>
              <p>
                <Link
                  href="/blog"
                  className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]"
                >
                  Blogs
                </Link>
              </p>
              <p>
                <Link
                  href={"reserve"}
                  className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]"
                >
                  Reserve Table
                </Link>
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Other Foods
              </p>
            </div>
          </div>

          <div className="flex md:justify-center justify-start">
            <div className="text-start">
              <h1 className="text-xl font-semibold leading-[14px] pb-8 font-bubblegum   text-black">
                About
              </h1>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Our Story
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Benifits
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Career
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Our Chefs
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Others
              </p>
            </div>
          </div>
          <div className="flex md:justify-center justify-start">
            <div className="text-start">
              <h1 className=" leading-[14px] pb-8 text-xl font-semibold font-bubblegum  text-black">
                Help
              </h1>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Contact
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                Suppport
              </p>
              <p className="font-medium text-sm leading-8 font-openSans text-[#AAAAAA]">
                FAQ
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
