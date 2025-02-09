import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SidePlant from '../Components/SidePlant';
import useFetchProduct from '../hooks/useFetchProduct';

const AboutProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useFetchProduct(id!);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <Header isLogin={true} />
      <main className="flex w-screen justify-center bg-slate-50 ">
        <div className="grid grid-cols-2 flex-1  p-12">
          <article className="col-span-2">
            <h1 className="font-play-display text-5xl font-bold mb-3 text-emerald-900 ">
              {product.name}
            </h1>
            <h3>
              {product.subtitle}
            </h3>
            <div className="w-full aspect-video overflow-hidden flex justify-center items-center">
                <img src={product.image} alt={product.name} className="w-full object-cover" />
            </div>
            <div className="mb-4 gap-12 space-y-4 justify-start flex font-inter text-slate-600 ">
                <div className="">
                    <h2 className="text-xl font-semibold">Price</h2>
                    <p>${product.price}</p>
                </div>

                <div className="">
                    <h2 className="text-xl font-semibold">Discount percentagem</h2>
                    <p>{product.discount}%</p>
                </div>
                <div className="">
                    <h2 className="text-xl font-semibold">highlight product</h2>
                    <p>{product.highlight ? "yes" : "no"}</p>
                </div>                
            </div>
            <div className="mb-4 text-slate-600 font-inter">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p>{product.description}</p>
            </div>

            <div className="mb-4 text-slate-600 font-inter">
                <h2 className="text-xl font-semibold mb-4">Category</h2>
                <span className="mb-4 top-2 right-2 bg-emerald-100 text-emerald-900 text-xs border-1 border-emerald-50 px-5 py-2 rounded-full shadow-md">
                    {product.category}
                </span>
            </div>
            <div className="mb-4">
            <button
              className="bg-emerald-900 w-full h-12 rounded-[8px] px-10 py-3 font-inter text-white font-semibold text-center text-[16px] leading-6 mt-8 hover:bg-emerald-700 cursor-pointer"
              type="button"
              onClick={() => window.location.href = `${window.location.pathname}/edit`}
            >Edit Plant</button>
            </div>
          </article>
          </div>
          <SidePlant />
            </main>
       <Footer />
    </>
  );
};

export default AboutProduct;