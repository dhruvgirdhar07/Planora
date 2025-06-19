import React from "react";

export default function Hero() {
  return (
    <section
      className="hero-section-main min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="logo">
        <img
          src="/planora-logo.svg"
          alt="logo"
          className="px-[25px] py-[25px]"
        />
      </div>
      <div className="hero-content-main flex-col flex justify-center items-center  py-[90px]">
        <h1 style={{ color: "#00BFA6" }} className="text-[56px] font-extrabold">
          Plan Your <span style={{ color: "#FFD54F" }}>Trip </span> , Your{" "}
          <span style={{ color: "#FFD54F" }}>Way</span>!
        </h1>
        <p style={{ color: "#F8F9FA" }} className="text-[24px] text-center">
          “Smart, personalized itineraries that keep everything organized — from <br />
          sunrise to sunset.”
        </p>
      </div>
    </section>
  );
}
