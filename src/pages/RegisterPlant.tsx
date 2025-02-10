import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SidePlant from "../Components/SidePlant";
import PlantForm from "../Components/PlantForm";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";

const RegisterPlant = () => {
  const navigate = useNavigate();
  const { fetchProducts } = useProducts();
  const [error, setError] = useState("");

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

      fetchProducts();
      navigate("/products");
    } catch (err) {
      setError("Error submitting plant. Please try again.");
    }
  };

  return (
    <>
      <Header isLogin={true} />
      <main className="flex w-screen justify-center bg-slate-50 ">
        <PlantForm onSubmit={handleSubmit} error={error} />
        <SidePlant />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPlant;

