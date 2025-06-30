import React from "react";

export default function AddActivityPopUp({ onClose }) {
  return (
    <div className="add-activity-popup fixed inset-0 bg-[#000000b5]  z-50 flex justify-center items-center">
      <div className="add-activity-form bg-white w-[860px] h-[485px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer text-white-800 text-xl"
          style={{color:"white"}}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
