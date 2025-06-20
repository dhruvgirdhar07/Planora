import React from "react";
import Link from "next/link";

export default function SignUp() {
  return (
    <section
      className="signup-section min-h-screen bg-cover bg-center bg-no-repeat content-center justify-items-center"
      style={{ backgroundImage: "url('/signup-bg.jpg')" }}
    >
      <Link href="home">
        <p className="home-bread">Home</p>
      </Link>

      <div className="inner-container-signup flex w-[1111px] h-[421px] bg-white shadow-lg">
        <img src="/signup-vector.svg" alt="" className="ml-[46px]" />
        <div className="signup-content pl-[57px] pt-[37px] justify-items-center">
          <h1 className="text-[34px] font-semibold text-[#00bfa6]">
            Register Yourself With Planora !
          </h1>
          <p className="text-[14px] font-[600] text-[#212121] text-center">
            Every unforgettable journey starts with a simple step — yours <br />{" "}
            starts here.
          </p>
          <form action="" className="flex flex-col gap-[26px] mt-[20px]">
            <div className="input-wrapper">
              <img
                src="/fullname-vector.svg"
                alt=""
                className="fullname-icon"
              />

              <input
                type="text"
                className="fullname-input"
                placeholder="Full Name "
                required
              />
            </div>
            <div className="input-wrapper">
              <img src="/email-vector.svg" alt="" className="fullname-icon" />

              <input
                type="email"
                className="fullname-input"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-wrapper">
              <img src="/pass-vecctor.svg" alt="" className="fullname-icon" />

              <input
                type="password"
                className="fullname-input"
                placeholder="Password "
                required
              />
            </div>
          </form>
          <Link href="login">
            <button className="w-[120px] h-[44px] text-[18px] mt-[30px] rounded-full font-[600] text-[#00BFA6] bg-[#FFD54F] hover:opacity-90 transition cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
