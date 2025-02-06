import rayanne from '../assets/image/rayanne.jpg';
const AboutRayanne = () => {
    return (
        <div className='flex flex-col w-[300px] items-center'>
            <div>
                <h1 className="font-play-display text-emerald-950 text-[20px] font-[500] mt-[30px] mb-[40px]">Rayanne Albuquerque Marques</h1>
                <img src={rayanne} alt="Foto Rayanne Albuquerque Marques" className='rounded-[10px] shadow-gray-500 shadow-lg' />
            </div>
            <div>
                <p className="font-inter font-[400] text-[16px] text-slate-500 text-justify mt-[30px] mb-[30px]">Cursando Técnico em Desenvolvimento de Sistemas no Senac Corumbá MS. Estágiária Compass Uol em desenvolvimento Front End. Atuei como estagiária na secretária administrativa da Área de Proteção Ambiental Baía Negra e sou embaixadora voluntária da Circulare</p>

            </div>

        </div>
    )
};

export default AboutRayanne;