import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InvalidInputMessage from "../Components/InvalidInputMessage";
import InputConfirm from "../Components/InputConfirm";
import { useProducts } from "../context/ProductContext";
import {
  validateDescription,
  validateDiscount,
  validateImageUrl,
  validateName,
  validatePrice,
  validateSubtitle,
  validateUniqueName,
} from "../utils/validations";

const categories = ["Indoor", "Outdoor", "Terrace & Balcony", "Office Desk"];

// estado para verificar se já houve tentativa de submit

interface PlantFormProps {
  initialData?: {
    id?: string;
    name: string;
    subtitle: string;
    category: string;
    price: string;
    discount: string;
    description: string;
    image: string;
    highlight: boolean;
    discountedPrice: number;
  };
  onSubmit: (formData: any) => Promise<void>;
  error: string;
  isEdit?: boolean;
}

const PlantForm = ({
  initialData,
  onSubmit,
  error,
  isEdit = false,
}: PlantFormProps) => {
  const { products } = useProducts();
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      subtitle: "",
      category: categories[0],
      price: "",
      discount: "",
      description: "",
      image: "",
      highlight: false,
    },
  );

  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {},
  );

  const handleBlur = (field: string) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const validations = {
    name: isEdit
      ? validateName(formData.name)
      : validateName(formData.name) &&
        validateUniqueName(formData.name, products),
    subtitle: validateSubtitle(formData.subtitle),
    price: validatePrice(formData.price),
    discount: validateDiscount(formData.discount),
    description: validateDescription(formData.description),
    image: isEdit
      ? formData.image === initialData?.image
        ? true
        : validateImageUrl(formData.image)
      : validateImageUrl(formData.image),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowMessage(false);

    if (Object.values(validations).every((v) => v)) {
      try {
        const updatedData = {
          ...formData,
          id: isEdit ? formData.id : uuidv4(),
          image:
            isEdit && !formData.image ? initialData?.image : formData.image,
          discountedPrice:
            Number(formData.price) * (1 - Number(formData.discount) / 100),
        };

        await onSubmit(updatedData);
      } catch (err) {
        console.error(err);
      }
      setShowMessage(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 flex-1 gap-8 p-12"
    >
      <section className="col-span-2">
        <h1 className="font-play-display text-5xl font-bold mb-3 text-emerald-900">
          {isEdit ? "Edit Plant" : "Register Plant"}
        </h1>
        <h3 className="font-inter font-normal text-[18px] leading-7 text-slate-500 max-w-[490px] w-full">
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
          id="plant-name"
          value={formData.name}
          placeholder="Echinocereus Cactus"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onBlur={() => handleBlur("name")}
        />
        <InvalidInputMessage
          validOn={!touchedFields.name || validations.name}
          message="Name should be between 3-80 characters and unique"
        />
      </div>

      {/* Subtitle Input */}
      <div className="input-group col-span-2">
        <label htmlFor="plant-subtitle">Plant Subtitle</label>
        <input
          type="text"
          id="plant-subtitle"
          value={formData.subtitle}
          placeholder="A majestic addition to your plant collection"
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
          onBlur={() => handleBlur("subtitle")}
        />
        <InvalidInputMessage
          validOn={!touchedFields.subtitle || validations.subtitle}
          message="Subtitle should be between 3-80 characters"
        />
      </div>

      {/* Category Input */}
      <div className="input-group col-span-2">
        <label htmlFor="category">Category</label>
        <select
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
          id="price"
          value={formData.price}
          placeholder="$139.99"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          onBlur={() => handleBlur("price")}
        />
        <InvalidInputMessage
          validOn={!touchedFields.price || validations.price}
          message="Price should be a positive number (ex: $139.00)"
        />
      </div>

      {/* Discount Input */}
      <div className="input-group">
        <label htmlFor="discount-percentage">Discount Percentage</label>
        <input
          type="text"
          id="discount-percentage"
          value={formData.discount}
          placeholder="20%"
          onChange={(e) =>
            setFormData({ ...formData, discount: e.target.value })
          }
          onBlur={() => handleBlur("discount")}
        />
        <InvalidInputMessage
          validOn={!touchedFields.discount || validations.discount}
          message="Discount should be a percentage between 0-100 (ex: 20%)"
        />
      </div>

      {/* Description Input */}
      <div className="input-group col-span-2">
        <label htmlFor="description">Description</label>
        <textarea
          rows={8}
          className="resize-none"
          id="description"
          value={formData.description}
          placeholder="Ladyfinger Cactus..."
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          onBlur={() => handleBlur("description")}
        />
        <InvalidInputMessage
          validOn={!touchedFields.description || validations.description}
          message="Description should be less than 250 characters and more than 10 characters"
        />
      </div>

      {/* Image URL Input */}
      <div className="input-group col-span-2">
        <label htmlFor="image-url">Image URL</label>
        <input
          type="text"
          id="image-url"
          placeholder="https://via.placeholder.com/600/810b14"
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          onBlur={() => handleBlur("image")}
        />
        <InvalidInputMessage
          validOn={!touchedFields.image || validations.image}
          message="URL should be valid (ex: https://via.placeholder.com/600/810b14)"
        />
      </div>

      {/* Highlight Product Checkbox */}
      <div className="font-inter mb-6 text-slate-500 col-span-2">
        <input
          type="checkbox"
          id="highlight-product"
          checked={formData.highlight}
          onChange={(e) =>
            setFormData({ ...formData, highlight: e.target.checked })
          }
          className="mr-2 size-4 border"
        />
        <label htmlFor="highlight-product">Highlight product</label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-emerald-900 rounded-md p-2 font-semibold text-[#FCFCFC] cursor-pointer hover:bg-emerald-700 col-span-2"
      >
        {isEdit ? "Save Changes" : "Register Plant"}
      </button>
      <InputConfirm
        showOn={showMessage}
        message={`Plant ${isEdit ? "updated" : "registered"} successfully!`}
      />
    </form>
  );
};

export default PlantForm;
