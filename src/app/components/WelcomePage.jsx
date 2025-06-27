import React from "react";
import Link from "next/link";
export default function WelcomePage() {
  return (
    <div className="main-div-welcome min-h-screen w-full flex bg-[#f8f9fa] ">
      <div className="welcome-left flex flex-col justify-between w-full md:w-[22.4%] bg-[#d6d6d6] py-[26px] px-[20px]">
        <div>
          <div className="user-profile flex justify-between">
            <div className="flex gap-[10px]">
              <img src="/profile-pic.svg" alt="pic" />
              <h3 className="text-[20px] text-[#212121] font-[500]">
                Dhruv Girdhar
              </h3>
            </div>
            <img src="/edit-icon.svg" alt="edit" className="cursor-pointer" />
          </div>
          <Link href={"/createtrip"}>
          <div className="create-trip-btn h-auto w-auto bg-[#FFD54F] mt-[26px] rounded-[30px] flex justify-center items-center px-[7px] py-[10px] cursor-pointer">
            <p className="text-[#00bfa6] text-[18px] ">Create Trip +</p>
          </div>
          </Link>
        </div>
        <Link href={"/home"}>
        <div className="logout flex text-[18px] gap-[15px] cursor-pointer">
          <h3>Logout</h3>
          <img src="/logout.svg" alt="logout" />
        </div>
        </Link>
      </div>
      <div
        className="welcome-right flex justify-center items-center bg-cover bg-center bg-no-repeat  w-full md:w-[77.6%]"
        style={{ backgroundImage: "url('/welcome_bg.svg')" }}
      >
        <div className="welcome-message-div w-[860px] h-[485px] py-[74.5px] px-[57px] bg-[#ffffff]">
          <h1 className="text-[#00bfa6] font-[600] text-[36px]">
            Welcome , Dhruv Girdhar !
          </h1>
          <img src="/underline.svg" className="mt-[17px]" alt="underline" />

          <p className="text-[18px] text-[#000000] font-[600] mt-[17px]">
            "Start planning your first trip in just a few clicks."
          </p>
          <p className="leading-10 text-[#212121] mt-[17px] text-[16px] ">
            Welcome to Planora &nbsp; — &nbsp; your smart travel companion.
            Whether it's a weekend escape or a full-blown adventure, we’re here
            to help you organize every day, every destination, and every detail
            effortlessly. <br /> Create a new trip, add destinations, plan daily
            activities, and visualize your journey &nbsp; — &nbsp; all in one
            place. <br /> Let the adventure begin.
          </p>
        </div>
      </div>
    </div>
  );
}
