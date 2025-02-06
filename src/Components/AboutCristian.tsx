import cristian from '../assets/image/Foto-perfil-Cristian.jpg'
const AboutCristian = () => {
    return (
        <div className='flex flex-col w-[300px] items-center'>
            <div>
                <h1 className="font-play-display text-emerald-950 text-[20px] font-[500] mt-[30px] mb-[40px]">Cristian Doring Molon</h1>
                <img src={cristian} alt="Foto Cristian Doring Molon" className='rounded-[10px] shadow-gray-500 shadow-lg' />
            </div>
            <div>
                <p className="font-inter font-[400] text-[16px] text-slate-500 text-justify mt-[30px] mb-[30px]">Graduado em Lic. Matemática.<br/>
                Graduando em Análise e Desenvolv. de Sistemas<br/>
                Estagiário Front-end na @compass.uol<br/>
                Sou comprometido com o aprendizado contínuo e busco contribuir com um ambiente colaborativo e positivo no ambiente profissional.</p>

            </div>

        </div>
    )
};

export default AboutCristian;