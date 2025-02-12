import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SidePlant from "../Components/SidePlant";
import PlantForm from "../Components/PlantForm";
import { useProducts } from "../context/ProductContext";
import InputConfirm from "../Components/InputConfirm";
import { useState } from "react";

const RegisterPlant = () => {
  const navigate = useNavigate();
  const { fetchProducts } = useProducts();
  const [error, setError] = useState("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleSubmit = async (newProduct: any) => {
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newProduct,
          price: parseFloat(newProduct.price.replace(/[^\d.]/g, "")),
          discount: parseInt(newProduct.discount.replace(/[^\d]/g, "")),
        }),
      });

      if (!response.ok) throw new Error("Registration failed");

      setShowMessage(true);
      fetchProducts();
      setTimeout(() => {
        navigate(`/products/`);
      }, 2000);
    } catch (err) {
      setError("Error submitting plant. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <main className="flex w-screen justify-center bg-slate-50 ">
        <div className="flex-1">
          <PlantForm onSubmit={handleSubmit} error={error} />
          <InputConfirm
            showOn={showMessage}
            message={`Plant registered successfully!`}
          />
        </div>
        <div className="flex-1">
          <SidePlant />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RegisterPlant;
