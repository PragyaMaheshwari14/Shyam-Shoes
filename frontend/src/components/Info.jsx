import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle resizing to determine if the view is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    } else {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }, [isMobile]);

  return (
    <div
      id="about"
      className={`w-screen ${isMobile ? "h-auto" : "min-h-screen"}`}
    >
      {/* Section Header */}
      <div className="relative mb-[14vw] lg:mb-8 mt-[10vw] lg:mt-[4vw] flex flex-col items-center gap-5">
        {/* Subtitle */}
        <p className="font-general text-sm uppercase text-[#111111] lg:text-[1.5vw]">
          Style Meets Comfort
        </p>

        {/* Title */}
        <div className="lg:mt-5 text-center text-[6vw] text-[#111111] uppercase font-krona tracking-tight leading-[1]">
          Redefining footwear <br /> elegance for modern living.
        </div>

        {/* Description */}
        <div className="flex flex-col text-center">
          <p className="text-gray-500 font-general text-sm uppercase lg:text-[1.5vw]">
            At Shyam Shoes, we craft high-quality shoes that make a statement with every step.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`relative ${isMobile ? "h-[40vh]" : "h-screen"} w-screen`}
        id="clip"
      >
        {/* Mask Clip Path */}
        <div
          className={`mask-clip-path absolute left-1/2 z-20 ${
            isMobile ? "h-full w-full" : "h-[60vh] w-[30vw] rounded-2xl"
          } origin-center -translate-x-1/2 overflow-hidden`}
        >
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
