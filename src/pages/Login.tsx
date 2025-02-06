import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";
import logoGreen from "../assets/image/logo-green.svg";
import SidePlant from "../Components/SidePlant.tsx";

function Login() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  return (
    <section className="flex h-screen  ">
      {/*a parte de login tem 50% de largura (os outros 50% são para a imagem*/}
      <section className="w-[50%] ">
        <img
          src={logoGreen}
          alt="planta"
          className="w-[49px] h-[54px] ml-16 mt-4"
        />

        <section className="  flex gap-12 flex-col  max-w-[424px] w-full mt-[112px] mb-[432px] mx-auto justify-center">
          <article className="flex flex-col gap-[5px] ]">
            <h1 className="h-12 font-play-display text-emerald-900 font-[700] text-[40px] leading-12">
              Sign Up
            </h1>
            <p className=" font-inter font-normal text-[16px] leading-6 text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </article>
          <form action="" className="input-group flex">
            <label className="font-inter font-medium text-[16px]  leading-5 text-slate-700">
              E-mail
            </label>
            <input
              type="text"
              placeholder="email@exemple.com"
              className="input-group "
            />
            <label className="font-inter font-medium text-[16px]  leading-5 text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-group"
            />
            <section className="flex gap-3">
              <input
                type="checkbox"
                name="stayConnected"
                id="stayConnected"
                className="w-6 h-6 rounded-[8px] border border-slate-200 p-3"
              />
              <p className="font-inter font-normal text-[16px] leading-5 text-center text-slate-500 ">
                stay connected
              </p>
            </section>

            <button className="bg-emerald-900 w-full h-12 rounded-[8px] px-10 py-3 font-inter text-white font-[600]text-center font-[16px] leading-6 mt-8">
              Login
            </button>
          </form>
        </section>
      </section>
      <div className="w-[50%] h-full">
        <SidePlant />
      </div>
    </section>
  );
}

export default Login;
