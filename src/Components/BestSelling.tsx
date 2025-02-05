import arroLeft from '../assets/image/arrowLeft.png';
import arroRight from '../assets/image/arrowRight.png';
const BestSelling = () => {
    return (
    <div className='flex w-[1230px] ml-[112px] mt-[150px] mb-[50px] justify-between'>
        <div className='w-[548px]'>
            <h1 className="font-play-display text-emerald-950 text-[40px] font-[700]">This weeks Most <br/>Popular and best selling</h1>
            <p className="font-inter font-[400] text-[16px] text-slate-500">Lorem ipsum dolor sit amet consectetur. Amet a egestas mauris<br/> faucibus dolor volutpat adipiscing amet ipsum. In.</p>
        </div>
        <div className='flex justify-between items-end gap-[24px] mr-[40px]'>
            <div><button className='hover:cursor-pointer'><img src={arroLeft} alt="" /></button></div>
            <div><button className='hover:cursor-pointer'><img src={arroRight} alt="" /></button></div>
        </div>
    </div>
    )
};

export default BestSelling;