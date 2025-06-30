"use client" ;
import React from "react";
import Link from "next/link";
import TripCard from "./TripCard";
import ActivityColumn from "./ActivityColumn";
import AddActivityPopUp from "./AddActivityPopUp";
import { useState } from "react";

export default function Dashboard() {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <div
      className="main-div-dashboard min-h-screen w-full flex bg-[#f8f9fa] "
      style={{ backgroundImage: "url('/dash-bg.svg')" }}
    >
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

          <div className="trips">
            <TripCard />
          </div>
        </div>
        <Link href={"/home"}>
          <div className="logout flex text-[18px] gap-[15px] cursor-pointer">
            <h3>Logout</h3>
            <img src="/logout.svg" alt="logout" />
          </div>
        </Link>
      </div>
      <div className="dashboard-right flex flex-col justify-between  bg-cover bg-center bg-no-repeat  w-full md:w-[77.6%] p-[18px]">
        <h2 className="text-[32px] text-[#212121]">Manali Expade</h2>

        <div className="activity-cols flex gap-[32px] overflow-x-auto w-full">
            <ActivityColumn onAddClick={() => setShowPopup(true)}/>
            <ActivityColumn onAddClick={() => setShowPopup(true)}/>
            <ActivityColumn onAddClick={() => setShowPopup(true)}/>
            <ActivityColumn onAddClick={() => setShowPopup(true)}/>
            <ActivityColumn onAddClick={() => setShowPopup(true)}/>

        </div>

         {showPopup && <AddActivityPopUp onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
}
