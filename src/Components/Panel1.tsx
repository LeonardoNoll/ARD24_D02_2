import { Link } from "react-router";
import plants1 from "../assets/image/Rectangle 32.png";
import plants2 from "../assets/image/Rectangle 45.png";
import plants3 from "../assets/image/flowers.png";

const Panel1 = () => {
  return (
    <div className="flex justify-center w-full">
      <div className=" flex w-[1216px] justify-center mt-[104px]">
      <div className="flex gap-[30px]">
        <img src={plants1} alt="Foto de plantas 1" />
        <img src={plants2} alt="Foto de plantas 2" />
      </div>
      <div className=" w-[555px] h-[559px] pl-[90px] border-r-red-500">
        <img src={plants3} alt="jardim de flores" />
        <p className="font-inter font-[400] text-[16px] text-slate-500 mt-[50px] mb-[20px] w-full leading-[24px] h-[275px]">
          Our website offers a wide array of stunning plants, ranging from
          vibrant flowers to lush indoor foliage, allowing you to create your
          very own green oasis. In addition to our extensive plant selection, we
          also provide gardening kits and fertilizers to equip you with
          everything you need to nurture your plants and achieve gardening
          success. But we don't stop there! We believe that knowledge is the key
          to a thriving garden, so we offer a wealth of information and
          resources on gardening techniques, plant care tips, and landscaping
          ideas. Whether you're a seasoned gardener or just starting your green
          journey, our goal is to inspire and support you every step of the way.
          Get ready to explore our virtual garden and discover the joys of
          gardening with us!
        </p>
        <Link to={"/products"}>
          <button
            className="font-inter bg-emerald-900 text-[16px] text-white w-[211px] h-[48px] rounded-lg mt-[100px]
                hover:cursor-pointer hover:bg-emerald-800"
          >
            See more photos
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Panel1;

