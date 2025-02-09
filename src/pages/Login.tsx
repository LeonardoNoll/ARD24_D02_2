import { useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import InvalidInputMessage from "../Components/InvalidInputMessage";
import LogoLink from "../Components/LogoLink.tsx";
import SidePlant from "../Components/SidePlant.tsx";
import { validateEmail, validatePassword } from "../utils/validations";

function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validations = {
    email: validateEmail(formData.email),
    password: validatePassword(formData.password),
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);

    if (!isLoaded || validations.email || validations.password) {
      setLoginFailed(true);
      return;
    }

    try {
      const result = await signIn.create({
        identifier: formData.email,
        password: formData.password,
      });
      console.log(result);

      if (result.status === "complete") {
        console.log("Logged in");
        await setActive({ session: result.createdSessionId });
        navigate("/products");
      }
    } catch (error) {
      console.error(error);
      setLoginFailed(true);
    }
  }

  return (
    <section className="flex h-screen  ">
      {/*a parte de login tem 50% de largura (os outros 50% são para a imagem*/}
      <section className="w-1/2 ">
        <LogoLink />

        <section className="flex gap-12 flex-col max-w-[424px] w-full mt-[112px] mb-[432px] mx-auto justify-center">
          <article className="flex flex-col gap-[5px] ]">
            <h1 className="h-12 font-play-display text-emerald-900 font-[700] text-[40px] leading-12">
              Sign Up
            </h1>
            <p className=" font-inter font-normal text-[16px] leading-6 text-slate-500 ">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </article>
          <form onSubmit={handleSubmit} className="input-group flex">
            <label className="font-inter font-medium text-[16px]  leading-5 text-slate-700">
              E-mail
            </label>
            <input
              type="text"
              placeholder="email@exemple.com"
              className="input-group "
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
            <InvalidInputMessage
              validOn={!submitted || validations.email}
              message="E-mail must be valid"
            />
            <label className="font-inter font-medium text-[16px]  leading-5 text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-group"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
            />
            <InvalidInputMessage
              validOn={!submitted || formData.password.length >= 8}
              message="Password must have at least 8 characters"
            />
            {/* TODO: make this not useless */}
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
            <button
              type="submit"
              className="bg-emerald-900 w-full h-12 rounded-[8px] px-10 py-3 font-inter text-white font-[600]text-center font-[16px] leading-6 mt-8"
            >
              Login
            </button>
            <InvalidInputMessage
              validOn={!loginFailed}
              message="Invalid e-mail or password"
            />
          </form>
        </section>
      </section>
      <div className="w-1/2 h-full">
        <SidePlant />
      </div>
    </section>
  );
}

export default Login;
