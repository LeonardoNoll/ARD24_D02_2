import sun from '../assets/image/sun.png';
import watering from '../assets/image/drop.png';
import nutrients from '../assets/image/bag.png';
const StepsToTake = () => {
    return (
      <div className="pt-[70px]">
        <div className="text-center">
            <h1 className="font-play-display text-emerald-950 text-[40px] font-[700]">Steps to take care of your plants</h1>
            <p className="font-inter font-[400] text-[16px] text-slate-500 w-[682px] text-center m-[auto] mt-[20px] mb-[80px]">By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants.</p>
        </div>
        <div className="flex justify-around" >
            <div className="text-center w-[373px]">
                <img src={watering} alt="Water" className='m-[auto]'/>
                <h1 className='font-inter text-[24px] font-[700] text-slate-950 mt-[30px] mb-[30px]'>Watering</h1>
                <p className="font-inter font-[400] text-[16px] text-slate-500 mb-[30px]">water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root dehydration.</p>
            </div>
            <div className="text-center w-[373px]">
                <img src={sun} alt="Sun" className='m-[auto]'/>
                <h1 className='font-inter text-[24px] font-[700] text-slate-950 mt-[30px] mb-[30px]'>Sunlight</h1>
                <p className="font-inter font-[400] text-[16px] text-slate-500 mb-[30px]">Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs</p>
            </div>
            <div className="text-center w-[373px]">
                <img src={nutrients} alt="Nutrients" className='m-[auto]'/>
                <h1 className='font-inter text-[24px] font-[700] text-slate-950 mt-[30px] mb-[30px]'>Nutrients and Fertilizing</h1>
                <p className="font-inter font-[400] text-[16px] text-slate-500 mb-[30px]">Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula.</p>
            </div>
        </div>
        
      </div>
    )
  }
  
  export default StepsToTake