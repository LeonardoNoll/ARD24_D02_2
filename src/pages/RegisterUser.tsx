import eye from "../assets/image/eye.png";
import ocult from "../assets/image/ocult.png";

import { useSignUp } from "@clerk/clerk-react";
import { FormEvent, useState } from "react";
import InputConfirm from "../Components/InputConfirm.tsx";
import InvalidInputMessage from "../Components/InvalidInputMessage.tsx";
import SidePlant from "../Components/SidePlant";
import { useNavigate } from "react-router";
import LogoLink from "../Components/LogoLink.tsx";
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from "../utils/validations.ts";

// regex

function RegisterUser() {
  const { isLoaded, signUp } = useSignUp();
  const navigate = useNavigate();

  // objeto de estados para as entradas
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // estado para verificar se já houve tentativa de submit
  const [submit, setSubmit] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  //estados para ver senhas enquanto estão no input
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  async function submitButton(e: FormEvent) {
    e.preventDefault();
    if (!isLoaded) return;
    if (
      !(
        validateUserName(formData.name) &&
        validateEmail(formData.email) &&
        validatePassword(formData.password) &&
        formData.password === formData.confirmPassword
      )
    ) {
      setSubmit(true);
      setShowMessage(false);
      return;
    }
    try {
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        firstName: formData.name.split(" ")[0],
        lastName: formData.name.split(" ").shift(),
      });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_link",
        redirectUrl: "http://localhost:5173/products",
      });
      setShowMessage(true);
      if (signUp.createdSessionId) {
        navigate("/");
      } else {
        throw new Error("Failed to create session.");
      }
    } catch (err) {
      console.error(err);
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }
  return (
    <section className="flex h-screen">
      <section className="w-[50%]">
        <LogoLink />

        <section className="flex gap-12 flex-col max-w-[424px] w-full mt-[78px] mb-[432px] mx-auto justify-center">
          <article className="flex flex-col gap-[5px]">
            <h1 className="h-12 font-play-display text-emerald-900 font-[700] text-[40px] leading-12">
              Register
            </h1>
            <p className="font-inter font-normal text-[16px] leading-6 text-slate-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </article>

          <form
            action=""
            className="input-group flex gap-1"
            onSubmit={submitButton}
          >
            <label className="font-inter font-medium text-[16px] leading-5 text-slate-700">
              Name
            </label>
            <input
              type="text"
              placeholder="john down"
              className="input-group"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submit || validateUserName(formData.name)}
              message={`Enter a valid first and last name`}
            />

            <label className="font-inter font-medium text-[16px] leading-5 text-slate-700">
              E-mail
            </label>
            <input
              type="email"
              placeholder="email@exemple.com"
              className="input-group"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submit || validateEmail(formData.email)}
              message={`Enter a valid e-mail`}
            />

            <label className="font-inter font-medium text-[16px] leading-5 text-slate-700">
              Password
            </label>
            <section className=" w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input-group pr-10" // 'pr-10' para adicionar espaçamento para o botão
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <img
                    src={ocult}
                    alt="icon ocult"
                    className="absolute w-[32px]  right-2 top-0.5"
                  />
                ) : (
                  <img
                    src={eye}
                    alt="icon open eye"
                    className="absolute w-[36px]  right-2 top-0.5"
                  />
                )}
              </button>
            </section>
            <InvalidInputMessage
              validOn={!submit || validatePassword(formData.password)}
              message={`Enter a password with at least 8 characters, letters and numbers, at least 1 capital letter and 1 special character.`}
            />

            <label className="font-inter font-medium text-[16px] leading-5 text-slate-700">
              Confirm Password
            </label>
            <section className=" w-full relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input-group pr-10" // 'pr-10' para adicionar espaçamento para o botão
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <img
                    src={ocult}
                    alt="icon ocult"
                    className="absolute w-[32px]  right-2 top-0.5"
                  />
                ) : (
                  <img
                    src={eye}
                    alt="icon open eye"
                    className="absolute w-[36px]  right-2 top-0.5"
                  />
                )}
              </button>
            </section>

            <InvalidInputMessage
              validOn={
                formData.password === formData.confirmPassword || !submit
              }
              message={`Passwords are different`}
            />

            <button
              className="bg-emerald-900 w-full h-12 rounded-[8px] px-10 py-3 font-inter text-white font-semibold text-center text-[16px] leading-6 mt-8"
              type="submit"
            >
              Register
            </button>
            <InputConfirm
              showOn={showMessage}
              message="Registered successfully, please check your email to verify."
            />
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
