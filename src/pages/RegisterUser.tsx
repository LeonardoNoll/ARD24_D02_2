import logoGreen from "../assets/image/logo-green.svg";
import SidePlant from "../Components/SidePlant";

function RegisterUser() {
  return (
    <section className="flex h-screen  ">
      <section className="w-[50%] ">
        <img
          src={logoGreen}
          alt="planta"
          className="w-[49px] h-[54px] ml-16 mt-4"
        />

        <section className="  flex gap-12 flex-col  max-w-[424px] w-full mt-[112px] mb-[432px] mx-auto justify-center">
          <article className="flex flex-col gap-[5px] ]">
            <h1 className="h-12 font-play-display text-emerald-900 font-[700] text-[40px] leading-12">
              Register
            </h1>
            <p className=" font-inter font-normal text-[16px] leading-6 text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </article>
          <form action="" className="input-group flex">
            <label className="font-inter font-medium text-[16px]  leading-5 text-slate-700">
              Name
            </label>
            <input
              type="text"
              placeholder="john down"
              className="input-group "
            />
            <label className="font-inter font-medium text-[16px]  leading-5 text-slate-700 pt-4">
              E-mail
            </label>
            <input
              type="text"
              placeholder="email@exemple.com"
              className="input-group "
            />
            <label className="font-inter font-medium text-[16px]  leading-5 text-slate-700 pt-4">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-group"
            />

            <label className="font-inter font-medium text-[16px]  leading-5 text-slate-700 pt-4" >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-group"
            />

            <button className="bg-emerald-900 w-full h-12 rounded-[8px] px-10 py-3 font-inter text-white font-[600]text-center font-[16px] leading-6 mt-8">
              Regiter
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

export default RegisterUser;
