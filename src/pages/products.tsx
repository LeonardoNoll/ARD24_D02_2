// src/pages/Products.tsx
import { useState } from 'react';
import { useProducts } from '../context/ProductContext';

const Products = () => {
  const { products, fetchProducts } = useProducts();
  const [category, setCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
    fetchProducts(selectedCategory, searchTerm);
  };


  return (
    

    <div className="min-h-screen bg-gray-100 flex p-4">
      {/* Filtro (aside à esquerda) */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6">
        <h2 className="text-lg font-inter text-slate-600 mb-2 p-2">Filter</h2>
        <div className="border-b border-slate-200"></div>

        {/* Dropdown de categorias */}
        <h3 className="cursor-pointer text-lg font-inter text-slate-600 mb-3 p-2"onClick={() => handleCategoryChange('')}>Categories</h3>
        <div className='flex justify-end'>
        <ul className="space-y-2 text-right pr-4"> 
          <li
            className={`cursor-pointer p-2 text-left rounded-lg text-slate-500`}
            onClick={() => handleCategoryChange('indoor')}
          >
            Indoor
          </li>
          <li
            className={`cursor-pointer p-2 text-left rounded-lg text-slate-500`}
            onClick={() => handleCategoryChange('terraceBalcony')}
          >
            Terrace & Balcony
          </li>
          <li
            className={`cursor-pointer p-2 text-left rounded-lg text-slate-500`}
            onClick={() => handleCategoryChange('officeDesk')}
          >
            Office Desk
          </li>
        </ul>
       </div>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
       
        <div className="flex gap-4 items-center mb-6">

          {/* Campo de busca */}
          <input
            type="text"
            placeholder="search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900"
          />

          {/* Botão de adicionar produto */}
          <button
            onClick={() => {
              window.location.href = '/add-product';
            }}
            className="w-[130px] h-12 flex  bg-emerald-900 rounded-[8px] font-inter font-[600] text-4 leading-[24.72px] text-white text-center px-7 py-3  "
          >
            Add plant
          </button>
        </div>


       {/* Listagem de produtos */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative flex flex-col items-center w-120"
            >
              {/* Overlay da categoria */}
              <span className="absolute top-2 right-2 bg-emerald-100 text-emerald-900 text-xs border-1 border-emerald-50 px-3 py-1 rounded-lg shadow-md">
                {product.category}
              </span>

              {/* Imagem do produto */}
              <div className="w-full aspect-square overflow-hidden flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Detalhes do produto */}
              <div className="p-4 w-full">
                <h3 className="text-lg font-semibold hover:underline cursor-pointer">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-2">$ {product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;