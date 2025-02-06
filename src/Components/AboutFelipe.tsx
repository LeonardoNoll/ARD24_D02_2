import felipe from '../assets/image/felipe.jpeg';
const AboutFelipe = () => {
    return (
        <div className='flex flex-col w-[300px] items-center'>
            <div>
                <h1 className="font-play-display text-emerald-950 text-[20px] font-[500] mt-[30px] mb-[40px]">Felipe Cirne da Silva</h1>
                <img src={felipe} alt="Foto Felipe Cirne da Silva" className='rounded-[10px] shadow-gray-500 shadow-lg' />
            </div>
            <div>
                <p className="font-inter font-[400] text-[16px] text-slate-500 text-justify mt-[30px] mb-[30px]">Supervisor Técnico em Informática , apaixonado por tecnologia e inovação desde a infância, sempre em busca de ampliar conhecimentos e acompanhar as tendências do mercado de TI. Atualmente, curso Análise e Desenvolvimento de Sistemas no IFRS Campus Rio Grande, onde aprofundo habilidades em programação, gestão de projetos e desenvolvimento de soluções tecnológicas eficientes. Movido por curiosidade constante e dedicação ao aprendizado contínuo, busco integrar teoria e prática para contribuir com avanços significativos na área.</p>

            </div>

        </div>
    )
};

export default AboutFelipe;