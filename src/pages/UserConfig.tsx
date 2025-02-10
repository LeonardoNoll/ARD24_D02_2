import { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SidePlant from "../Components/SidePlant";
import { useClerk, useUser } from "@clerk/clerk-react";
import {
  validateUserName,
  validateEmail,
  validatePassword,
} from "../utils/validations";
import InvalidInputMessage from "../Components/InvalidInputMessage";
import eye from "../assets/image/eye.png";
import ocult from "../assets/image/ocult.png";
import InputConfirm from "../Components/InputConfirm";

const UserConfig = () => {
  const { isLoaded, user } = useUser();
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState(
    isLoaded ? user?.firstName + " " + user?.lastName : "",
  );
  const [showNameSucess, setShowNameSuccess] = useState(false);
  const [email, setEmail] = useState(
    isLoaded ? user?.primaryEmailAddress?.emailAddress : "",
  );
  const [showEmailSucess, setShowEmailSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  //estados para ver senhas enquanto estão no input
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPasswordSuccess, setShowPasswordSuccess] = useState(false);
  const validations = {
    name: validateUserName(name),
    email: validateEmail(email!),
    password: validatePassword(password),
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    setShowNameSuccess(false);
    setShowEmailSuccess(false);
    setShowPasswordSuccess(false);

    if (!isLoaded || !user) return;

    if (validations.name)
      try {
        await user.update({
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
        });
        setShowNameSuccess(true);
      } catch (error) {
        console.log(error);
      }
    if (validations.email && email !== user.primaryEmailAddress?.emailAddress) {
      const emailAlreadyExists = user.emailAddresses.find(
        (existingEmail) => existingEmail.emailAddress === email,
      );
      if (emailAlreadyExists)
        user.update({ primaryEmailAddressId: emailAlreadyExists.id });
      else {
        try {
          const newEmail = await user.createEmailAddress({
            email: email!,
          });
          await newEmail.prepareVerification({
            strategy: "email_link",
            redirectUrl: "localhost:5173/",
          });
          user.update({ primaryEmailAddressId: newEmail.id });
        } catch (error) {
          console.log(error);
        }
      }
      setShowEmailSuccess(true);
    }

    if (validations.password)
      try {
        await user.updatePassword({
          newPassword: password,
          currentPassword: currentPassword,
        });
        setShowPasswordSuccess(true);
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <>
      <Header isLogin={false} />
      <main className="flex w-full justify-center bg-slate-50 ">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 flex-1 gap-8 p-12"
        >
          <section className="col-span-2">
            <h1 className="font-play-display text-5xl font-bold mb-3 text-emerald-900 ">
              User config
            </h1>
            <p className="font-inter font-normal text-[18px] leading-7 text-slate-500 w-[490px]">
              Lorem ipsum dolor sit amet consectetur. Turpis vitae at et massa
              neque.
            </p>
          </section>
          <div className="input-group col-span-2">
            <label
              htmlFor="plant-name"
              className="font-inter font-weight[500] text-[18px] leading-[21px] text-slate-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              className="input-group"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InvalidInputMessage
              validOn={!submit || validateUserName(name) || name === ""}
              message={`Enter a valid first and last name`}
            />
          </div>
          <div className="input-group col-span-2">
            <label
              htmlFor="email"
              className="font-inter font-weight[500] text-[18px] leading-[21px] text-slate-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-group"
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <InvalidInputMessage
              validOn={!submit || validateEmail(email!) || email === ""}
              message={`Enter a valid e-mail`}
            />
          </div>
          <div className="input-group col-span-2">
            <label
              htmlFor="password"
              className="font-inter font-weight[500] text-[18px] leading-[21px] text-slate-700"
            >
              Password
            </label>
            <section className=" w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                className="input-group"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              validOn={!submit || validatePassword(password) || password === ""}
              message={`Enter a password with at least 8 characters, letters and numbers, at least 1 capital letter and 1 special character.`}
            />
          </div>
          <div className="input-group col-span-2">
            <label
              htmlFor="currentPassword"
              className="font-inter font-weight[500] text-[18px] leading-[21px] text-slate-700"
            >
              Current Password
            </label>
            <section className=" w-full relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                id="currentPassword"
                placeholder="••••••••"
                className="input-group"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showPassword)}
              >
                {showCurrentPassword ? (
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
                !submit || validatePassword(currentPassword) || password === ""
              }
              message={`Enter a password with at least 8 characters, letters and numbers, at least 1 capital letter and 1 special character.`}
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-900 focus:bg-emerald-950 col-span-2 rounded-md p-2 font-semibold text-[#FCFCFC]"
          >
            Edit account
          </button>
          <div className="flex flex-col gap-2 col-span-2">
            <InputConfirm
              showOn={showEmailSucess}
              message="Email update confirmation sent to you new e-mail!"
            />
            <InputConfirm showOn={showNameSucess} message="Name updated!" />
            <InputConfirm
              showOn={showPasswordSuccess}
              message="Password updated!"
            />
          </div>
        </form>
        <SidePlant />
      </main>
      <Footer />
    </>
  );
};

export default UserConfig;
