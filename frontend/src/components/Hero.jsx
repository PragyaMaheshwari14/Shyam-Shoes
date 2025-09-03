import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const mainVdRef = useRef(null);
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos) {
      setLoading(false);
    }
  }, [loadedVideos]);

  useEffect(() => {
    if (mainVdRef.current) {
      gsap.fromTo(
        mainVdRef.current,
        {
          transformOrigin: "center center",
          scale: 1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
        }
      );
    }
  }, [currentIndex]);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    gsap.to(mainVdRef.current, {
      transformOrigin: "center center",
      scale: 1.5,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      onComplete: () => {
        setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);

        if (nextVdRef.current) {
          gsap.fromTo(
            nextVdRef.current,
            {
              transformOrigin: "center center",
              scale: 1,
              opacity: 0,
            },
            {
              scale: 1.5,
              opacity: 1,
              duration: 1,
              ease: "power1.inOut",
              onStart: () => nextVdRef.current?.play(),
            }
          );
        }
      },
    });
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden">
        <div className="mask-clip-path absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
            <video
              ref={nextVdRef}
              src={getVideoSrc((currentIndex % totalVideos) + 1)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </div>
        </div>

        <video
          ref={mainVdRef}
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          id="main-video"
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
        />
      </div>

      <div className="absolute left-0 top-0 z-40 px-5 mt-24 lg:px-10 lg:mt-[6vw]">
          <h1 className="text-blue-100 text-[8vw] tracking-tight font-bold font-krona">
            SHYAM SHOES
          </h1>
          <p className="mb-5 text-blue-100 font-krona">
            Footwear designed for everyday elegance — <br /> because less is always more.
          </p>
      </div>
    </div>
  );
};

export default Hero;
