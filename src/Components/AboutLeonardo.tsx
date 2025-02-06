import leonardo from '../assets/image/leonardo.jpg'
const AboutLeonardo = () => {
    return (
        <div className='flex flex-col w-[300px] items-center'>
            <div>
                <h1 className="font-play-display text-emerald-950 text-[20px] font-[500] mt-[30px] mb-[40px]">Leonardo Noll Cruz</h1>
                <img src={leonardo} alt="Foto Leonardo Noll Cruz" className='rounded-[10px] shadow-gray-500 shadow-lg'/>
            </div>
            <div>
                <p className="font-inter font-[400] text-[16px] text-slate-500 text-justify mt-[60px] mb-[30px]">Dev frontend cursando Sistemas Para Intenet no IFRS.<br/>Estou atualmente desenvolvendo um App voltado ao gerenciamento de inventário pessoal. Estou mais do que aberto para bater um papo e dividir algumas experiências sobre esse mundão da programação.</p>

            </div>

        </div>
    )
};

export default AboutLeonardo;