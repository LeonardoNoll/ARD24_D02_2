import Header from "../Components/Header";
import Footer from "../Components/Footer";
import backgrounderror from "../assets/image/backgrounderror.png";

const handleRedirect= () => {
    window.location.href = '/';
};

export function Error404() {
    return (
      <>

<div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgrounderror})`}}>
        <section className="flex justify-center items-center min-h-screen">
            <div className="text-center p-8 shadow-lg rounded-lg max-w-lg h-96">
                <h1 className="font-play-display text-7xl font-bold mb-15 text-emerald-900 ">ERROR 404</h1>
                <p className="font-inter display mb-10 mt-4 text-2xl text-emerald-950 w-80 text-center mx-auto">The page you are looking for does not exist!
                </p>

                <p className="mt-4">
                    <button onClick={handleRedirect} className="inline-block px-8 py-3 bg-emerald-600 text-white font-inter rounded-md shadow-md hover:bg-emerald-700 transition duration-300 ease-in-out">Return to home page</button>

                </p>
            </div>
        </section>
        </div>
              </>
    );
  }