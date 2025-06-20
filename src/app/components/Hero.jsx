import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Logo */}
      <div className="p-6">
        <img src="/planora-logo.svg" alt="Planora Logo" className="h-12" />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center text-center gap-12 px-4 pt-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-[56px] font-extrabold text-[#00BFA6] leading-tight">
            Plan Your <span className="text-[#FFD54F]">Trip</span>, Your{" "}
            <span className="text-[#FFD54F]">Way</span>!
          </h1>
          <p className="text-[24px] text-[#F8F9FA]  mx-auto">
            “Smart, personalized itineraries that keep everything organized —
            from
            <br />
            sunrise to sunset.”
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/signup">
            <button className="w-[120px] h-[44px] text-[18px] rounded-full font-semibold text-[#00BFA6] bg-[#FFD54F] hover:opacity-90 transition cursor-pointer">
              Sign Up
            </button>
          </Link>

          <Link href="/login">
            <button className="w-[120px] h-[44px] text-[18px] rounded-full font-semibold text-[#00BFA6] bg-[#FFD54F] hover:opacity-90 transition cursor-pointer">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
