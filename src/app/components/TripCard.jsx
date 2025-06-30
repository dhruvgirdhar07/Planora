import React from 'react'

export default function TripCard() {
  return (
    <div className='trip-card-main justify-center items-center flex'>
      <div className='h-[278px] bg-[#ffffff] w-[231px] flex flex-col mt-[32px]  ' style={{borderRadius : "10px 10px 0 0"}}>
        <img src="/trip-img1.svg" alt="" />
        <div className="trip-card-content flex flex-col pl-[9px] pt-[2px] gap-[4px]">
            <h3 className='text-[16px]'>Manali Expade</h3>
            <div className="flex  gap-[3px]">
                <img src="/Frame-l.svg" alt="" />
                <p className='text-[12px] text-[#212121]'>Manali , Himachal Pradesh</p>
            </div>
            <div className="flex gap-[3px]">
                <img src="/Frame.svg" alt="" />
                <p className='text-[12px] text-[#212121]'>21-06-25 to 26-05-25</p>
            </div>
        </div>

      </div>
    </div>
  )
}
