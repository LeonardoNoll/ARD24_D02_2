import plant1 from '../assets/image/plant1.png'
const Hero = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[524px] h-[339px] gap-[24px] mt-[206px] ml-[112px]">
        <h1 className="font-play-display mb-[30px] font-[700] text-[64px] leading-[53px] text-emerald-950">Discover Your Green Side</h1>
        <p className="font-inter pr-[40px] text-[16px] text-slate-500">We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis.</p>
        <button className="font-inter bg-emerald-950 text-[16px] text-white w-[157px] h-[48px] rounded-lg mt-[30px]">Shop now</button>
      </div>
      <div>
        <img src={plant1} alt="Planta" className="w-[720px] h-[636px] "/>
      </div>
    </div>
  )
}

export default Hero