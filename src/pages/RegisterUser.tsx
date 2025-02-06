import logoGreen from "../assets/image/logo-green.svg";
import InvalidInputMessage from "../components/InvalidInputMessage.tsx";
import InputConfirm from "../Components/InputConfirm.tsx";
import SidePlant from "../Components/SidePlant";
import { useState } from "react";

function RegisterUser() {

  // regex
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  //objeto de estados para as entradas
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //estado para verificar se já houve tentativa de submit
  const [submit, setSubmit] = useState<boolean>(false);

  const [showMessage, setShowMessage] = useState<boolean>(false);

  function submitButton(e: React.FormEvent) {
    e.preventDefault()
    setSubmit(true)
    setShowMessage(true)
    
  }

  return (
    <section className="flex h-screen">
      <section className="w-[50%]">
        <img
          src={logoGreen}
          alt="planta"
          className="w-[49px] h-[54px] ml-16 mt-4"
        />

        <section className="flex gap-12 flex-col max-w-[424px] w-full mt-[112px] mb-[432px] mx-auto justify-center">
          <article className="flex flex-col gap-[5px]">
            <h1 className="h-12 font-play-display text-emerald-900 font-[700] text-[40px] leading-12">
              Register
            </h1>
            <p className="font-inter font-normal text-[16px] leading-6 text-slate-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </article>
          <form action="" className="input-group flex gap-1" onSubmit={submitButton}>
            <label className="font-inter font-medium text-[16px] leading-5 text-slate-700">
              Name
            </label>
            <input
              type="text"
              placeholder="john down"
              className="input-group"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submit || nameRegex.test(formData.name)}
              message={`Enter a valid first and last name`}
            />

            <label className="font-inter font-medium text-[16px] leading-5 text-slate-700">
              E-mail
            </label>
            <input
              type="email"
              placeholder="email@exemple.com"
              className="input-group"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submit || emailRegex.test(formData.email)}
              message={`Enter a valid e-mail`}
            />

            <label className="font-inter font-medium text-[16px] leading-5 text-slate-700 ">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-group"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submit || passwordRegex.test(formData.password)}
              message={`Enter a password with at least 8 characters, letters and numbers, at least 1 capital letter and 1 special character.`}
            />

            <label className="font-inter font-medium text-[16px] leading-5 text-slate-700 ">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-group"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={formData.password === formData.confirmPassword || !submit}
              message={`Passwords are different`}
            />

            <button
              className="bg-emerald-900 w-full h-12 rounded-[8px] px-10 py-3 font-inter text-white font-[600] text-center font-[16px] leading-6 mt-8"
              type="submit"
            >
              Register
            </button>
            
          </form>
          <InputConfirm message="Registered successfully" />
        </section>
      </section>
      <div className="w-[50%] h-full">
        <SidePlant />
      </div>
    </section>
  );
}

export default RegisterUser;
