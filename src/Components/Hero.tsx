import { Link } from "react-router";
import plant1 from "../assets/image/plat1_hero.png";
const Hero = () => {
  return (
    <div className="flex gap-20 justify-between w-full">
      <div className="w-1/2 gap-6">
      <div className="w-[524px] h-[339px] mt-[117px] ml-[112px] mr-[86px] flex gap-[24px] flex-col">
        <h1 className="font-play-display mb-[15px] font-[700] text-[64px] leading-[53px] text-emerald-900">
          Discover Your Green Side
        </h1>
        <p className="font-inter pr-[40px] font-[400] text-[16px] text-slate-500">
          We are your one-stop destination for all things green and growing. Our
          website offers a wide array of stunning plants, ranging from vibrant
          flowers to lush indoor foliage, allowing you to create your very own
          green oasis.
        </p>
        <Link to={"/products"}>
          <button
            className="font-inter bg-emerald-900 text-[16px] font-[600] text-white w-[157px] h-[48px] rounded-lg mt-[15px]
        hover:cursor-pointer hover:bg-emerald-800"
          >
            Shop now
          </button>
        </Link>
      </div>
      </div>
      <div className="w-1/2">
        <img src={plant1} alt="Planta" className="w-full h-[636px]" />
      </div>
    </div>
  );
};

export default Hero;

