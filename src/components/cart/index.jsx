import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Cart = ({handleModal}) => {
    const rating=5
  return (
    <div

      className="w-full h-fit rounded-lg bg-white  flex flex-col justify-between "
    >
      <div className="overflow-hidden w-full  rounded-t-[15px] ">
        <Image
          height={400}
          width={300}
          className="w-full object-cover h-40 transition-transform duration-500 hover:scale-125"
          src={`/images/food.webp`}
          alt=""
        />
      </div>
     
    <div className="p-5">
    <div className="text-center ">
        <h1 className="font-bold font-bubblegum">Pasta</h1>
       
            {/* Ratings */}
            <div className="flex justify-center py-2">
              {rating &&
                Array(Math.floor(rating))
                  .fill(null)
                  .map((_, index) => (
                    <FaStar key={index} className="text-primary" />
                  ))}
              {rating % 1 !== 0 ? (
                <FaStarHalfAlt className="text-primary" />
              ) : (
                <FaStar className="text-white" />
              )}
            </div>
            
        <p className="text-xs py-2 font-openSans">
          Pasta is a type of food typical nade from an unleavended dough
        </p>
      </div>
      <div className="flex justify-between items-center mt-5 font-openSans ">
        <span className="text-base font-bold">$36.00</span>
        <button onClick={()=>handleModal()} className="border-2 border-primary text-sm font-bold  px-4 py-1 rounded-full hover:bg-primary">View More</button>
      </div>
    </div>
    </div>
  );
};

export default Cart;
