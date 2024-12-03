import React from "react";
import { useState, useRef } from "react";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font font-krona">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-[#111111] pb-[5vw]">
      <div className="container mx-auto px-3 md:px-10">
        <div className="py-[5vw]">
          <p className="font-krona text-[4vw] text-blue-50 md:text-2xl">
            Urban Style Redefined
          </p>
          <p className="max-w-md text-[3vw] mt-[2vw] text-blue-50 opacity-50 md:text-lg">
            Step into the world of modern fashion with Urban Store. From
            trendsetting designs to timeless classics, we bring you the perfect
            blend of style, comfort, and quality.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>inspire</>}
            description="Explore fashion that inspires confidence and creativity, blending urban trends with timeless elegance for every occasion."
          />
        </BentoTilt>

        <div className="grid h-[90vh] w-full grid-cols-1 gap-7 md:grid-cols-2 md:gap-7">
          {/* BentoCard 1 */}
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>discover</>}
              description="Uncover the latest styles curated to fit your lifestyle, offering quality and comfort in every piece."
              isComingSoon
            />
          </BentoTilt>

          {/* BentoCard 2 */}
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-1">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>elevate</>}
              description="Redefine your wardrobe with chic designs crafted to enhance your personal style."
              isComingSoon
            />
          </BentoTilt>

          {/* BentoCard 3 */}
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-1">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>empower</>}
              description="Feel empowered in clothing designed to celebrate diversity, embrace comfort."
              isComingSoon
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
