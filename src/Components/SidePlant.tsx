import backgroundImage from "../assets/image/plant1.png";

const SidePlant = () => {
  return (
    <div className="flex-1 relative overflow-hidden">
      <img
        src={backgroundImage}
        alt="imagem de uma planta em um vaso"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default SidePlant;
