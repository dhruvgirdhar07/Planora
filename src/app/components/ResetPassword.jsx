import React from "react";
import Link from "next/link";

export default function ResetPassword() {
  return (
    <section
      className="signup-section min-h-screen bg-cover bg-center bg-no-repeat content-center justify-items-center"
      style={{ backgroundImage: "url('/signup-bg.jpg')" }}
    >
      <Link href="home">
        <p className="home-bread">Home</p>
      </Link>
      <div className="inner-container-signup flex w-[1111px] h-[421px] bg-white shadow-lg">
        <img src="/reset-vector.svg" alt="" className="ml-[46px]" />
        <div className="signup-content pl-[100px] pt-[35px] flex flex-col justify-around items-center">
          <div className="reset-header flex flex-col justify-center items-center">
            <h1 className="text-[34px] font-semibold text-[#00bfa6]">
              Reset Your Password
            </h1>
            <p className="text-[14px] font-[600] text-[#212121] text-center">
              Every unforgettable journey starts with a simple step — yours{" "}
              <br /> starts here.
            </p>
          </div>
          <form action="" className="flex flex-col gap-[26px] mt-[20px]">
            <div className="input-wrapper">
              <img src="/pass-vecctor.svg" alt="" className="fullname-icon" />

              <input
                type="password"
                className="fullname-input"
                placeholder="Password "
                required
              />
            </div>
            <div className="input-wrapper">
              <img src="/pass-vecctor.svg" alt="" className="fullname-icon" />

              <input
                type="password"
                className="fullname-input"
                placeholder="Confirm Password "
                required
              />
            </div>
          </form>
          <Link href="/login">
            <button className="w-[120px] h-[44px] text-[18px] mt-[20px] rounded-full font-[600] text-[#00BFA6] bg-[#FFD54F] hover:opacity-90 transition cursor-pointer">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
