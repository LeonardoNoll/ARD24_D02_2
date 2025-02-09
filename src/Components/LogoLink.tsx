import { Link } from "react-router";
import logoGreen from "../assets/image/logo-green.svg";

const LogoLink = () => {
  return (
    <Link to={"/"}>
      <img
        src={logoGreen}
        alt="planta"
        className="w-[49px] h-[54px] ml-16 mt-4"
      />
    </Link>
  );
};

export default LogoLink;
