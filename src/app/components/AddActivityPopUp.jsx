import React from "react";
import Link from "next/link";

export default function AddActivityPopUp({ onClose }) {
  return (
    <div className="add-activity-popup fixed inset-0 bg-[#000000b5]  z-50 flex justify-center items-center">
      <div className="add-activity-form bg-white w-[860px] h-[485px] p-[25px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer text-white-800 text-xl"
          style={{ color: "white" }}
        >
          ✕
        </button>
        <div className="create-activity-form">
          <div className="flex justify-between">
            <h3 className="text-[36px] text-[#00bfa6] font-[500]">
              ADD ACTIVITY
            </h3>
            <Link href={"/"}>
              <div className="create-trip-btn h-auto w-auto bg-[#FFD54F] mt-[8px] rounded-[30px] max-h-[32px] min-w-[82px] flex justify-center items-center px-[7px] py-[10px] cursor-pointer">
                <p className="text-[#00bfa6] text-[18px] ">Submit</p>
              </div>
            </Link>
          </div>
          <form action="" className="flex flex-col gap-[8px]">
            <div className="activity-title">
              <label
                htmlFor="activity-title"
                className="text-[#212121] text-[18px] text-base"
              >
                Activity Title
              </label>
              <div className="input-wrapper">
                <img
                  src="/trip-name.svg"
                  className="activity-form-icon"
                  alt=""
                />
                <input
                  type="text"
                  className="h-[40px] pl-[10px] mt-[3px] w-[806px] bg-[#f8f9fa]"
                  placeholder="Pangong Lake"
                />
              </div>
            </div>
            <div className="activity-title">
              <label
                htmlFor="activity-title"
                className="text-[#212121] text-[18px] text-base"
              >
                Location
              </label>
              <div className="input-wrapper">
                <img
                  src="/location.svg"
                  className="activity-form-icon"
                  alt=""
                />
                <input
                  type="text"
                  className="h-[40px] pl-[10px] mt-[3px] w-[806px] bg-[#f8f9fa]"
                  placeholder="Pangong Village"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="activity-title">
                <label
                  htmlFor="activity-title"
                  className="text-[#212121] text-[18px] text-base"
                >
                  Time From
                </label>
                <div className="input-wrapper">
                  <img src="/time.svg" className="activity-form-icon" alt="" />
                  <input
                    type="time"
                    className="h-[40px] pl-[10px] mt-[3px] w-[400px] bg-[#f8f9fa] [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
                    placeholder="Pangong Village"
                  />
                </div>
              </div>
              <div className="activity-title">
                <label
                  htmlFor="activity-title"
                  className="text-[#212121] text-[18px] text-base"
                >
                  Time To
                </label>
                <div className="input-wrapper">
                  <img src="/time.svg" className="activity-form-icon" alt="" />
                  <input
                    type="time"
                    className="h-[40px] pl-[10px] mt-[3px] w-[400px] bg-[#f8f9fa] [appearance:textfield] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute"
                    placeholder="Pangong Village"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="activity-notes">
                <label
                  htmlFor="activity-title"
                  className="text-[#212121] text-[18px] text-base"
                >
                  Activity Notes
                </label>
                <div className="input-wrapper">
                  {/* <img
                    src="/trip-name.svg"
                    className="activity-form-icon"
                    alt=""
                  /> */}
                  <input
                    type="text"
                    className="h-[112px] pl-[10px] mt-[3px] w-[260px] bg-[#f8f9fa]"
                    placeholder="Notes"
                  />
                </div>
              </div>
              <div className="activity-map">
                <label
                  htmlFor="activity-title"
                  className="text-[#212121] text-[18px] text-base"
                >
                  Activity Map
                </label>
                <div className="input-wrapper">
                  {/* <img
                    src="/trip-name.svg"
                    className="activity-form-icon"
                    alt=""
                  /> */}
                  <iframe
                    src="https://www.google.com/maps/embed?in=!1m18!1m12!..."
                    width="260"
                    height="120"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="activity-cover-pic">
                <label
                  htmlFor="activity-title"
                  className="text-[#212121] text-[18px] text-base"
                >
                  Cover Photo
                </label>
                <div className="input-wrapper">
                  {/* <img
                    src="/trip-name.svg"
                    className="activity-form-icon"
                    alt=""
                  /> */}
                  <input
                    type="file"
                    accept="image"
                    className="h-[112px] pl-[10px] mt-[3px] w-[260px] bg-[#f8f9fa]  file:mx-auto file:py-2 file:px-4
      file:rounded file:border-0
      file:text-sm file:font-semibold
      file:bg-[#00bfa6] file:text-white
      hover:file:bg-[#009e8a] text-center
      content-center justify-center"
                    placeholder="Cover Photo"
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
