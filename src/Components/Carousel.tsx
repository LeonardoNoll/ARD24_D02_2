import cactus from '../assets/image/plant4.png';
import plant2 from '../assets/image/plant2.png';
import plant3 from '../assets/image/plant3.png';

const Carousel = () => {
    return (
        <div className='flex justify-center w-full'>
            <div className='flex justify-between mb-[70px] w-[1230px] ml-[112px]'>
            <div className="relative w-[389px]">
                <button className='absolute top-[20px] left-[210px] font-inter font-[400] text-[16px] w-[74.9px] h-[38.85px] bg-emerald-100
                rounded-[19.43px] border-[1px] border-white text-emerald-900'>indoor</button>
                <button className='absolute top-[20px] left-[300px] font-inter font-[400] text-[16px] w-[74.9px] h-[38.85px] bg-emerald-100
                rounded-[19.43px] border-[1px] border-white text-emerald-900'>cactus</button>
                <img src={cactus} alt="Cactus" />
                <h2 className='font-inter text-slate-600 font-[600] text-[24px] mt-[15px]'>Echinocereus Cactus</h2>
                <p className='font-inter text-slate-500 font-[400] text-[16px] mt-[15px] mb-[15px]'>$15.00</p>
            </div>
            <div className="relative w-[389px]">
                <button className='absolute top-[20px] left-[210px] font-inter font-[400] text-[16px] w-[74.9px] h-[38.85px] bg-emerald-100
                rounded-[19.43px] border-[1px] border-white text-emerald-900'>indoor</button>
                <button className='absolute top-[20px] left-[300px] font-inter font-[400] text-[16px] w-[74.9px] h-[38.85px] bg-emerald-100
                rounded-[19.43px] border-[1px] border-white text-emerald-900'>cactus</button>
                <img src={plant2} alt="Plant 2" />
                <h2 className='font-inter text-slate-600 font-[600] text-[24px] mt-[15px]'>Echinocereus Cactus</h2>
                <p className='font-inter text-slate-500 font-[400] text-[16px] mt-[15px] mb-[15px]'>$15.00    <s>$35.00</s></p>
            </div>
            <div className="relative w-[389px]">
                <button className='absolute top-[20px] left-[210px] font-inter font-[400] text-[16px] w-[74.9px] h-[38.85px] bg-emerald-100
                rounded-[19.43px] border-[1px] border-white text-emerald-900'>indoor</button>
                <button className='absolute top-[20px] left-[300px] font-inter font-[400] text-[16px] w-[74.9px] h-[38.85px] bg-emerald-100
                rounded-[19.43px] border-[1px] border-white text-emerald-900'>cactus</button>
                <img src={plant3} alt="Plant 3" />
                <h2 className='font-inter text-slate-600 font-[600] text-[24px] mt-[15px]'>Echinocereus Cactus</h2>
                <p className='font-inter text-slate-500 font-[400] text-[16px] mt-[15px] mb-[15px]'>$15.00</p>
            </div>

        </div>
        </div>
    )
};

export default Carousel;