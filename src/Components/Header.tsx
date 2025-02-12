import { Link, useLocation } from "react-router";
import logoGreen from "../assets/image/logo-green.svg";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";

const isPath = (pathname: string, path: string): string =>
  pathname === path ? "nav-link text-emerald-900" : "nav-link";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="w-full h-[89px] border-b-1 flex justify-between py-4 px-10 border-slate-200 items-center">
      <Link title="Home" to="/">
        <img
          src={logoGreen}
          alt="planta"
          className="w-[49px] h-[54px] flex gap-[55px] "
        />
      </Link>
      {/*exibe menu diferente se estiver logado ou não*/}
      <SignedIn>
        <nav className="w-[289px] h-[57px] p-4 flex gap-4">
          <Link to="/" className={isPath(pathname, "/")}>
            Home
          </Link>

          <Link to="/products" className={isPath(pathname, "/products")}>
            Products
          </Link>
          <Link to="/about-me" className={isPath(pathname, "/about-me")}>
            About me
          </Link>
        </nav>
      </SignedIn>
      <SignedOut>
        <nav className="w-[90px] h-[57px] p-4 flex gap-4">
          <Link to="/" className={isPath(pathname, "/")}>
            Home
          </Link>
        </nav>
      </SignedOut>

      {/*mostra um determinado botao se tiver ou não logado*/}
      <SignedIn>
        <SignOutButton>
          <button className="w-[139px] h-12 flex gap-10 bg-emerald-900 hover:cursor-pointer hover:bg-emerald-800 rounded-[8px] py-3 px-10 font-inter font-[600] text-4 leading-[24.72px] text-center text-white">
            Log out
          </button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <section className="w-[227px] h-12 flex gap-10 items-center">
          <Link
            to="/register"
            className="w-16 h-[25px] font-inter font-[500] text-[16px] leading-[24px] text-center text-slate-900"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="w-[123px] h-12 flex gap-10 bg-emerald-900 hover:cursor-pointer hover:bg-emerald-800 rounded-[8px] py-3 px-10 font-inter font-[600] text-4 leading-[24.72px] text-center text-white"
          >
            Login
          </Link>
        </section>
      </SignedOut>
    </header>
  );
}

export default Header;
