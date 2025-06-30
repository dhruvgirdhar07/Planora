"use client";
import React from "react";
import Link from "next/link";
import { useRef } from "react";
import TripCard from "./TripCard";

export default function TripCreated() {
  const startRef = useRef(null);
  const endRef = useRef(null);
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

          <Link href={"/dashboard"}>
          <div className="trips">
            <TripCard />
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
        <div className="create-trip-form w-[860px] h-[485px] py-[20px] px-[42px] bg-[#ffffff]">
          <div className="flex justify-between">
            <h1 className="text-[#00bfa6] font-[600] text-[36px]">
              CREATE YOUR TRIP !
            </h1>
            <Link href={"/tripcreated"}>
              <div className="create-trip-btn h-auto w-auto bg-[#FFD54F] mt-[8px] rounded-[30px] max-h-[32px] min-w-[82px] flex justify-center items-center px-[7px] py-[10px] cursor-pointer">
                <p className="text-[#00bfa6] text-[18px] ">Submit</p>
              </div>
            </Link>
          </div>
          <form action="" className="flex flex-col gap-[8px]">
            <div className="trip-name-form-input">
              <label
                htmlFor="trip-name"
                className="text-[#212121] text-[18px] text-base"
              >
                Trip Name
              </label>
              <div className="input-wrapper">
                <img src="/trip-name.svg" className="form-icon" alt="" />
                <input
                  type="text"
                  className="h-[40px] pl-[10px] mt-[3px] w-[746px] bg-[#f8f9fa]"
                  placeholder="Manali Expade"
                />
              </div>
            </div>
            <div className="destination-form-input">
              <label
                htmlFor="trip-name"
                className="text-[#212121] text-[18px] text-base"
              >
                Destination
              </label>
              <div className="input-wrapper">
                <img src="/location.svg" className="form-icon" alt="" />
                <input
                  type="text"
                  className="h-[40px] pl-[10px] mt-[3px] w-[746px] bg-[#f8f9fa]"
                  placeholder="Kullu Manali"
                />
              </div>
            </div>
            <div className="flex gap-[12px]">
              {/* Start Date */}
              <div className="flex flex-col ">
                <label
                  htmlFor="start-date"
                  className="text-[#212121] text-[18px] mb-1"
                >
                  Start Date
                </label>
                <div className="relative">
                  <input
                    id="start-date"
                    ref={startRef}
                    type="date"
                    className="w-[368px] h-[40px] pr-10 pl-3 bg-[#f8f9fa] rounded border border-gray-300 focus:outline-none focus:border-blue-500
              [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
                  />
                  <img
                    src="/date.svg"
                    alt="calendar icon"
                    onClick={() => startRef.current?.showPicker()}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>

              {/* End Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="end-date"
                  className="text-[#212121] text-[18px] mb-1"
                >
                  End Date
                </label>
                <div className="relative">
                  <input
                    id="end-date"
                    ref={endRef}
                    type="date"
                    className="w-[368px] h-[40px] pr-10 pl-3 bg-[#f8f9fa] rounded border border-gray-300 focus:outline-none focus:border-blue-500
              [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
                  />
                  <img
                    src="/date.svg"
                    alt="calendar icon"
                    onClick={() => endRef.current?.showPicker()}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div className="trip-notes-form-input">
                <label
                  htmlFor="trip-name"
                  className="text-[#212121] text-[18px] text-base"
                >
                  Trip Notes
                </label>
                <div className="input-wrapper">
                  {/* <img src="/location.svg" className="form-icon" alt="" /> */}
                  <input
                    type="text-area"
                    className="h-[118px] right-[290px] pl-[10px] mt-[3px] w-[480px] bg-[#f8f9fa] text-center align-top"
                    // placeholder="Enter Your Trip Notes Here"
                  />
                </div>
              </div>
              <div className="upload-image-form-input">
                <label
                  htmlFor="trip-name"
                  className="text-[#212121] text-[18px] text-base"
                >
                  Cover Photo
                </label>
                <div className="input-wrapper">
                  {/* <img src="/location.svg" className="form-icon" alt="" /> */}
                  <input
                    type="file"
                    accept="image"
                    className="h-[118px] right-[290px] pl-[10px] mt-[3px] w-[258px] bg-[#f8f9fa]  file:mr-4 file:py-2 file:px-4
         file:mx-auto file:py-2 file:px-4
      file:rounded file:border-0
      file:text-sm file:font-semibold
      file:bg-[#00bfa6] file:text-white
      hover:file:bg-[#009e8a] text-center
      content-center"
                    placeholder="Upload Photo"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
