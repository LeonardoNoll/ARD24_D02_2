import logoGreen from "../assets/image/logo-green.svg";
import { Link } from "react-router";

function Header(props: { isLogin: boolean }) {
  return (
    <header className="w-screen h-[89px] border-b-1 flex justify-between py-4 px-10 border-slate-200 items-center">
      <img
        src={logoGreen}
        alt="planta"
        className="w-[49px] h-[54px] flex gap-[55px] "
      />
      {/*exibe menu diferente se estiver logado ou não*/}
      {props.isLogin ? (
        <nav className="w-[289px] h-[57px] p-4 flex gap-4">
          <Link
            to="/"
            className="w-[58px] h-[25px] font-normal font400 leading-[24px] text-4 text-center text-slate-500"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="w-[88px] h-[25px] font-normal font400 leading-[24px] text-4 text-center text-slate-500"
          >
            Products
          </Link>
          <Link
            to="about-me"
            className="w-[79px] h-[25px] font-normal font400 leading-[24px] text-4 text-center text-slate-500"
          >
            About me
          </Link>
        </nav>
      ) : (
        <nav className="w-[90px] h-[57px] p-4 flex gap-4">
          <Link
            to="/"
            className="w-[58px] h-[25px] font-normal font400 leading-[24px] text-4 text-center text-slate-500"
          >
            Home
          </Link>
        </nav>
      )}

      {/*mostra um determinado botao se tiver ou não logado*/}
      {props.isLogin ? (
        <button className="w-[139px] h-12 flex gap-10 bg-emerald-900 rounded-[8px] py-3 px-10 font-inter font-[600] text-4 leading-[24.72px] text-center text-white">
          Log out
        </button>
      ) : (
        <section className="w-[227px] h-12 flex gap-10 items-center">
          <a className="w-16 h-[25px] font-inter font-[500] text-[16px] leading-[24px] text-center text-slate-900">
            Register
          </a>
          <button className="w-[123px] h-12 flex gap-10 bg-emerald-900 rounded-[8px] py-3 px-10 font-inter font-[600] text-4 leading-[24.72px] text-center text-white">
            Login
          </button>
        </section>
      )}
    </header>
  );
}

export default Header;
