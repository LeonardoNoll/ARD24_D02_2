import { useNavigate } from "react-router";
import backgrounderror from "../assets/image/backgrounderror.png";

export function Error403() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/login");
  };
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgrounderror})` }}
      >
        <section className="flex justify-center items-center min-h-screen">
          <div className="text-center p-8 shadow-lg rounded-lg max-w-lg h-96">
            <h1 className="font-play-display text-7xl font-bold mb-15 text-emerald-900 ">
              ERROR 403
            </h1>
            <p className="font-inter display mb-10 mt-4 text-2xl text-emerald-950 w-80 text-center mx-auto">
              Access to this resource on the server is denied!{" "}
            </p>

            <p className="mt-4">
              <button
                onClick={handleRedirect}
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-inter rounded-md shadow-md hover:bg-emerald-700 transition duration-300 ease-in-out"
              >
                Login to continue
              </button>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
