import React from "react";
import Link from "next/link";

export default function LogIn() {
  return (
    <section
      className="signup-section min-h-screen bg-cover bg-center bg-no-repeat content-center justify-items-center"
      style={{ backgroundImage: "url('/signup-bg.jpg')" }}
    >
      <div className="inner-container-signup flex w-[1111px] h-[421px] bg-white shadow-lg">
        <img src="/login-vector.svg" alt="" className="ml-[46px]" />
        <div className="signup-content pl-[60px] pt-[37px] justify-items-center">
          <h1 className="text-[34px] font-semibold text-[#00bfa6]">
            Login Your existing Account
          </h1>
          <p className="text-[14px] font-[600] text-[#212121] text-center">
            Every unforgettable journey starts with a simple step — yours <br />{" "}
            starts here.
          </p>
          <form action="" className="flex flex-col gap-[26px] mt-[20px]">
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
          <p className="text-[14px] text-[#212121] mt-[27px]">
            Don't Have An Account ?
            <Link href="/signup">
              <span className="text-[#00bfa6]"> Sign Up</span>
            </Link>{" "}
          </p>
          <Link href="/forgotpassword">
            <p className="text-[#00bfa6] text-[14px] mt-[9px]">Forgot Password</p>
          </Link>
          <button className="w-[120px] h-[44px] text-[18px] mt-[20px] rounded-full font-[600] text-[#00BFA6] bg-[#FFD54F] hover:opacity-90 transition cursor-pointer">
            Log In
          </button>
        </div>
      </div>
    </section>
  );
}
