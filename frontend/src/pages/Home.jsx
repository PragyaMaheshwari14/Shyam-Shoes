import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Info from "../components/Info";
import Features from "../components/Featues";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <LatestCollection />
      <Info />
      <Features />
    </div>
  );
};

export default Home;
