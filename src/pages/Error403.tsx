import Header from "../Components/Header";
import Footer from "../Components/Footer";
import backgrounderror from "../assets/image/backgrounderror.png";

const handleRedirect= () => {
    window.location.href = '/';
};

export function Error403() {
    return (
      <>
        <Header isLogin={false} />
        <div className="min-h-screen bg-cover bg-center" style={{backgroundImage: `url(${backgrounderror})`}}>
        <section className="flex justify-center items-center min-h-screen">
            <div className="text-center p-8 shadow-lg rounded-lg max-w-lg">
                <h1 className="font-play-display text-6xl font-bold mb-20 text-emerald-900 ">ERROR 403</h1>
                <p className="font-play- display mb-10 mt-4 text-lg text-emerald-700">Access to this resource on the server is denied! </p>
                <p className="mt-4">
                    <button onClick={handleRedirect} className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-md shadow-md hover:bg-emerald-700 transition duration-300 ease-in-out">Return to home page</button>
                </p>
            </div>
        </section>
        </div>
        
        <Footer />
      </>
    );
  }