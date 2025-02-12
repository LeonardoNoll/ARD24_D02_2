import backgroundImage from "../assets/image/plant1.png";

const SidePlant = () => {
  return (
    <div className="flex-auto relative overflow-hidden h-full w-full">
      <img
        src={backgroundImage}
        alt="imagem de uma planta em um vaso"
        className="h-full w-full object-cover relative"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-30"></div>
    </div>
  );
};

export default SidePlant;