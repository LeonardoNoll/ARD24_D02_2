import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SidePlant from "../Components/SidePlant";

const UserConfig = () => {
  return (
    <>
      <Header isLogin={false} />
      <main className="flex w-screen justify-center bg-slate-50 ">
        <form action="" className="grid grid-cols-2 flex-1 gap-8 p-12">
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
            <input type="text" name="name" id="name" placeholder="John Doe" />
          </div>
          <div className="input-group col-span-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
            />
          </div>
          <div className="input-group col-span-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*********"
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
