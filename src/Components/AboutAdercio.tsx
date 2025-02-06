import adercio from '../assets/image/adercio_dev.jpg'
const AboutAdercio = () => {
    return (
        <div className='flex flex-col w-[300px] items-center'>
            <div>
                <h1 className="font-play-display text-emerald-950 text-[20px] font-[500] mt-[30px] mb-[40px]">Adercio Barbuio Junior</h1>
                <img src={adercio} alt="Foto Adercio Barbuio Junior" className='rounded-[10px] shadow-gray-500 shadow-lg'/>
            </div>
            <div>
                <p className="font-inter font-[400] text-[16px] text-slate-500 text-justify mt-[30px] mb-[30px]">Técnico em Eletrotécnica. Atuando por 30 anos em segurança eletrônica patrimonial. Desenvolvedor de hardwares baseados em  Arduino. Atualmente, cursando Técnico em Desenvolvimento de Softwares no SENAC - MS e Engenharia de Software EAD na  Estácio de Sá.</p>

            </div>

        </div>
    )
};

export default AboutAdercio;