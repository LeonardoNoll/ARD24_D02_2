import backgroundImage from "../assets/image/plant1.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const categories = ["Indor", "Outdoor", "Terracy & Balcony", "Office Desk"];

const EditPlant = () => {
  return (
    <>
      <Header isLogin={false} />
      <main className="flex w-screen justify-center bg-slate-50 ">
        <form action="" className="grid grid-cols-2 flex-1 gap-8 p-12">
          <section className="col-span-2">
            <h1 className="font-play-display text-5xl font-bold mb-3 text-emerald-900 ">
              Edit Plant
            </h1>
            <h3>
              Lorem ipsum dolor sit amet consectetur. Turpis vitae at et massa
              neque.
            </h3>
          </section>
          <div className="input-group col-span-2">
            <label htmlFor="plant-name">Plant Name</label>
            <input
              type="text"
              name="plant-name"
              id="plant-name"
              placeholder="Echinocereus Cactus"
            />
          </div>
          <div className="input-group col-span-2">
            <label htmlFor="plant-subtitle">Plant Subtitle</label>
            <input
              type="text"
              name="plant-subtitle"
              id="plant-subtitle"
              placeholder="A majestic addition to your plant collection"
            />
          </div>
          <div className="input-group col-span-2">
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="price">Price</label>
            <input type="text" name="price" id="price" placeholder="$139.00" />
          </div>
          <div className="input-group">
            <label htmlFor="discount-percentage">Discount Percentage</label>
            <input
              type="text"
              name="discount-percentage"
              id="discount-percentage"
              placeholder="%20"
            />
          </div>
          <div className="input-group col-span-2">
            <label htmlFor="description">Description</label>
            <textarea
              rows={5}
              className="resize-none"
              name="description"
              id="description"
              placeholder="Ladyfinger cactus..."
            />
          </div>
          <div className="input-group col-span-2">
            <label htmlFor="image-url">Image URL</label>
            <input
              type="text"
              name="image-url"
              id="image-url"
              placeholder="https://via.placeholder.com/600/810b14"
            />
          </div>
          <div className="font-inter mb-6 text-slate-500 col-span-2">
            <input
              type="checkbox"
              name="highlight-product"
              id="highlight-product"
              className="mr-2 size-4 border"
            />
            <label htmlFor="highlight-product">highlight product</label>
          </div>
          <button
            type="submit"
            className="bg-emerald-900 rounded-md p-2 font-semibold text-[#FCFCFC]"
          >
            Save To Edit Plant
          </button>
        </form>
        <div className="flex-1 relative overflow-hidden">
          <img
            src={backgroundImage}
            alt="imagem de uma planta em um vaso"
            className="h-full w-full object-cover"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EditPlant;
