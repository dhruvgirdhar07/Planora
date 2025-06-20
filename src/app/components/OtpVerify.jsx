import React from "react";
import Link from "next/link";

export default function OtpVerify() {
  return (
    <section
      className="signup-section min-h-screen bg-cover bg-center bg-no-repeat content-center justify-items-center"
      style={{ backgroundImage: "url('/signup-bg.jpg')" }}
    >
      <Link href="home">
        <p className="home-bread">Home</p>
      </Link>
      <div className="inner-container-signup flex w-[1111px] h-[421px] bg-white shadow-lg">
        <img src="/otp-vector.svg" alt="" className="ml-[46px]" />
        <div className="signup-content pl-[100px] pt-[37px] flex flex-col items-center justify-around">
          <div className="fp-header flex flex-col justify-center items-center">
            <h1 className="text-[34px] font-semibold text-[#00bfa6]">
              Verify OTP
            </h1>
            <p className="text-[14px] font-[600] text-[#212121] text-center">
              Verify OTP Sent on your Registered E-mail ID
            </p>
          </div>
          <div className="otp-container flex gap-[24px]">
            <div className="otp-box h-[50px] w-[50px] bg-[#f8f9fa] border-[#00bfa6] rounded-[10px] border-[1px]"></div>
            <div className="otp-box h-[50px] w-[50px] bg-[#f8f9fa] border-[#00bfa6] rounded-[10px] border-[1px]"></div>
            <div className="otp-box h-[50px] w-[50px] bg-[#f8f9fa] border-[#00bfa6] rounded-[10px] border-[1px]"></div>
            <div className="otp-box h-[50px] w-[50px] bg-[#f8f9fa] border-[#00bfa6] rounded-[10px] border-[1px]"></div>
          </div>
          <p className="text-[#00bfa6] text-[14px]">
            {" "}
            Resend <span className="text-[#212121]">in 50s</span>
          </p>
          <Link href="resetpassword">
            <button className="w-[120px] h-[44px] text-[18px] mt-[20px] rounded-full font-[600] text-[#00BFA6] bg-[#FFD54F] hover:opacity-90 transition cursor-pointer">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
