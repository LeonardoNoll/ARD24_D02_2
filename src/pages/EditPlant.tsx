import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import useFetchProduct from "../hooks/useFetchProduct";
import SidePlant from "../Components/SidePlant";
import PlantForm from "../Components/PlantForm";
import { useProducts } from "../context/ProductContext";

const EditPlant: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error: fetchError } = useFetchProduct(id!);
  const { fetchProducts } = useProducts();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = React.useState("");

  const handleSubmit = async (updatedProduct: any) => {
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...updatedProduct,
          price: parseFloat(updatedProduct.price.replace(/[^\d.]/g, "")),
          discount: parseInt(updatedProduct.discount.replace(/[^\d]/g, "")),
        }),
      });

      if (!response.ok) throw new Error("Update failed");

      fetchProducts();
      setTimeout(() => {
        navigate(`/products/${id}`);
      }, 2000);
    } catch (err) {
      setSubmitError("Error updating plant. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (fetchError) return <p>{fetchError}</p>;
  if (!product) return <p>Product not found</p>;

  // Converte números para strings para os inputs
  const initialFormData = {
    ...product,
    id: product.id.toString(),
    price: product.price.toString(),
    discount: product.discount.toString(),
  };

  return (
    <>
      <Header />
      <main className="flex w-screen justify-center bg-slate-50 ">
        <PlantForm
          initialData={initialFormData}
          onSubmit={handleSubmit}
          error={submitError}
          isEdit={true}
        />
        <SidePlant />
      </main>
      <Footer />
    </>
  );
};

export default EditPlant;
