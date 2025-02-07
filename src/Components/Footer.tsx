import { Link } from "react-router";
import logoWhite from "../assets/image/logo-white.svg";

function Footer() {
  return (
    <footer className="bg-[url(/../src/assets/image/background-footer.png)] bg-cover bg-center w-full h-[422px] text-white flex justify-center ">
      <section className="w-[1274px] h-[298px] pt-20">
        <section className="w-[1264px] h-[168] flex justify-between mb-12">
          <section className="w-274px h-135px flex gap-4 flex-col ">
            <h1 className="font-play-display font-[700] text-[40px] leading-[53px]">
              Stay Fresh
            </h1>
            <p className="font-inter font-normal text-[16px] leading-[24px]">
              compassinhos@gmail.com
            </p>
            <p className="font-inter font-normal text-[16px] leading-[24px]">
              +55 41 99999-9999
            </p>
          </section>

          <section className="w-[300px] h-[168px] flex justify-between">
            <nav className="flex flex-col">
              <h2 className="font-inter font-[700] text-[24px] leading-[29px] mb-4">
                Links
              </h2>
              <Link
                to="/about-us"
                className="font-inter font-normal text-[16px] leading-[24px] mb-4"
              >
                About us
              </Link>
            </nav>
            <nav className="flex flex-col">
              <h2 className="font-inter font-[700] text-[24px] leading-[29px] mb-4">
                Community
              </h2>
              <a
                target="_blank"
                href="https://www.linkedin.com/"
                className="font-inter font-normal text-[16px] leading-[24px] mb-4"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/"
                className="font-inter font-normal text-[16px] leading-[24px] mb-4"
              >
                Instagram
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/"
                className="font-inter font-normal text-[16px] leading-[24px] mb-4"
              >
                Facebook
              </a>
            </nav>
          </section>
        </section>
        <section className="flex w-[1274px] h-[82px] border-t-1 border-emerald-950 justify-between">
          <img
            src={logoWhite}
            alt="planta branca"
            className="w-49px h-54px mt-7"
          />
          <p className="font-inter font-normal text-16px leading-[25px] text-center mt-[42.5px] ">
            Compassinhos ®. All rights reserved.
          </p>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
