import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SidePlant from "../Components/SidePlant";
import InvalidInputMessage from "../Components/InvalidInputMessage";
import { useProducts } from "../context/ProductContext";
import {
  validateName,
  validateSubtitle,
  validatePrice,
  validateDiscount,
  validateDescription,
  validateImageUrl,
} from "../utils/validations";

const categories = ["Indoor", "Outdoor", "Terrace & Balcony", "Office Desk"];

const RegisterPlant = () => {
  const { fetchProducts } = useProducts();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    subtitle: "",
    category: categories[0],
    price: "",
    discount: "",
    description: "",
    image: "",
    highlight: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validations = {
    name: validateName(formData.name),
    subtitle: validateSubtitle(formData.subtitle),
    price: validatePrice(formData.price),
    discount: validateDiscount(formData.discount),
    description: validateDescription(formData.description),
    image: validateImageUrl(formData.image),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.values(validations).every((v) => v)) {
      try {
        const newProduct = {
          id: uuidv4(),
          name: formData.name.trim(),
          subtitle: formData.subtitle.trim(),
          category: formData.category,
          price: parseFloat(formData.price.replace(/[^\d.]/g, "")),
          discount: parseInt(formData.discount.replace(/[^\d]/g, "")),
          description: formData.description.trim(),
          image: formData.image,
          highlight: formData.highlight,
        };

        const response = await fetch("http://localhost:3001/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        });

        if (!response.ok) throw new Error("Registration failed");

        fetchProducts();
        navigate("/products"); // Redireciona para lista de produtos
      } catch (err) {
        setError("Error submitting plant. Please try again.");
      }
    }
  };

  return (
    <>
      <Header isLogin={true} />
      <main className="flex w-screen justify-center bg-slate-50 ">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 flex-1 gap-8 p-12"
        >
          <section className="col-span-2">
            <h1 className="font-play-display text-5xl font-bold mb-3 text-emerald-900 ">
              Register Plant
            </h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur. Turpis vitae at et massa
              neque.
            </h3>
            {error && <p className="text-red-600 mb-4">{error}</p>}
          </section>

          {/* Name Input */}
          <div className="input-group col-span-2">
            <label htmlFor="plant-name">Plant Name</label>
            <input
              type="text"
              name="plant-name"
              id="plant-name"
              placeholder="Echinocereus Cactus"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submitted || validations.name}
              message="Name should be between 3-80 characters"
            />
          </div>

          {/* Subtitle Input */}
          <div className="input-group col-span-2">
            <label htmlFor="plant-subtitle">Plant Subtitle</label>
            <input
              type="text"
              name="plant-subtitle"
              id="plant-subtitle"
              placeholder="A majestic addition to your plant collection"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submitted || validations.subtitle}
              message="Subtitle should be between 3-80 characters"
            />
          </div>

          {/* Category Input */}
          <div className="input-group col-span-2">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Price Input */}
          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="$139.00"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submitted || validations.price}
              message="Price should be a positive number (ex: $139.00)"
            />
          </div>

          {/* Discount Input */}
          <div className="input-group">
            <label htmlFor="discount-percentage">Discount Percentage</label>
            <input
              type="text"
              name="discount-percentage"
              id="discount-percentage"
              placeholder="%20"
              value={formData.discount}
              onChange={(e) =>
                setFormData({ ...formData, discount: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submitted || validations.discount}
              message="Discount should be a percentage between 0-100 (ex: 20%)"
            />
          </div>

          {/* Description Input */}
          <div className="input-group col-span-2">
            <label htmlFor="description">Description</label>
            <textarea
              rows={5}
              className="resize-none"
              name="description"
              id="description"
              placeholder="Ladyfinger cactus..."
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submitted || validations.description}
              message="Description should be less than 250 characters"
            />
          </div>

          {/* Image URL Input */}
          <div className="input-group col-span-2">
            <label htmlFor="image-url">Image URL</label>
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="https://via.placeholder.com/600/810b14"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
            <InvalidInputMessage
              validOn={!submitted || validations.image}
              message="URL should be valid (ex: https://via.placeholder.com/600/810b14)"
            />
          </div>

          {/* Highlight Product Checkbox */}
          <div className="font-inter mb-6 text-slate-500 col-span-2">
            <input
              type="checkbox"
              name="highlight-product"
              id="highlight-product"
              className="mr-2 size-4 border"
              checked={formData.highlight}
              onChange={(e) =>
                setFormData({ ...formData, highlight: e.target.checked })
              }
            />
            <label htmlFor="highlight-product">highlight product</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-emerald-900 rounded-md p-2 font-semibold text-[#FCFCFC] hover:bg-emerald-700 col-span-2"
          >
            Register Plant
          </button>
        </form>
        <SidePlant />
      </main>
      <Footer />
    </>
  );
};

export default RegisterPlant;

