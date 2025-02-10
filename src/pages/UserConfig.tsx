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

const UserConfig = () => {
  const { isLoaded, user } = useUser();
  const clerk = useClerk();
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState(
    user?.firstName + " " + user?.lastName || "",
  );
  const [email, setEmail] = useState(
    user?.primaryEmailAddress?.emailAddress || "",
  );
  const [password, setPassword] = useState("");
  const validations = {
    name: validateUserName(name),
    email: validateEmail(email),
    password: validatePassword(password),
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!(isLoaded && user && validations.email && validations.password))
      return;

    try {
      await user.update({
        firstName: name,
        lastName: name,
      });

      if (email !== user.primaryEmailAddress?.emailAddress) {
        const newEmail = await user.createEmailAddress({ email: email });
        user.update({ primaryEmailAddressId: newEmail.id });
      }

      if (password) await user.updatePassword({ newPassword: password });

      await user.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header isLogin={false} />
      <main className="flex w-screen justify-center bg-slate-50 ">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 flex-1 gap-8 p-12"
        >
          <section className="col-span-2">
            <h1 className="font-play-display text-5xl font-bold mb-3 text-emerald-900 ">
              User config
            </h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur. Turpis vitae at et massa
              neque.
            </h3>
          </section>
          <div className="input-group col-span-2">
            <label htmlFor="plant-name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InvalidInputMessage
              validOn={!submit || validateUserName(name)}
              message={`Enter a valid first and last name`}
            />
          </div>
          <div className="input-group col-span-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <InvalidInputMessage
              validOn={!submit || validateEmail(email)}
              message={`Enter a valid e-mail`}
            />
          </div>
          <div className="input-group col-span-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InvalidInputMessage
              validOn={!submit || validatePassword(password)}
              message={`Enter a password with at least 8 characters, letters and numbers, at least 1 capital letter and 1 special character.`}
            />
          </div>
          <button
            type="submit"
            className="bg-emerald-900 rounded-md p-2 font-semibold text-[#FCFCFC]"
          >
            Save To Edit Plant
          </button>
        </form>
        <SidePlant />
      </main>
      <Footer />
    </>
  );
};

export default UserConfig;
