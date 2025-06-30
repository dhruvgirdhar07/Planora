import React from "react";
import Link from "next/link";

export default function ActivityColumn({onAddClick}) {
  return (
    <div className="activity-column-main min-w-[236px] w-[236px] h-[468px] bg-[#f2f3f4] rounded-[10px]">
      <div className="day-num p-[18px] text-[16px] text-[#212121] border-b-[1px]  border-b-[#d6d6d6]">
        Day 1
      </div>
      <p
        onClick={onAddClick}
        className="text-[16px] text-[#212121] cursor-pointer text-center mt-[23px]"
      >
        Add Activity +
      </p>
    </div>
  );
}
