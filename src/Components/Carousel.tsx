import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProducts, Product } from '../context/ProductContext';
import arroLeft from '../assets/image/arrowLeft.png';
import arroRight from '../assets/image/arrowRight.png';

const Carousel: React.FC = () => {
  const { products, fetchProducts } = useProducts();
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (shouldFetch) {
      fetchProducts();
      setShouldFetch(false);
    }
  }, [shouldFetch, fetchProducts]);

  // Filtrar produtos destacados
  const highlightedProducts = products.filter((product: Product) => product.highlight);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <>
      {/* Container principal */}
      <div className='flex justify-center w-full'>
        <div className='w-full pl-[124px]'>
          {/* Cabeçalho do carrossel */}
          <div className='flex w-full mt-[150px] mb-[50px] justify-between'>
            <div className='w-auto'>
              <h1 className="font-play-display text-emerald-900 text-[40px] font-[700]">
                This weeks Most <br />Popular and best selling
              </h1>
              <p className="font-inter font-[400] text-[16px] text-slate-500">
                Lorem ipsum dolor sit amet consectetur. Amet a egestas mauris<br /> faucibus dolor volutpat adipiscing amet ipsum. In.
              </p>
            </div>
            <div className='flex justify-between items-end gap-[24px] mr-[40px]'>
              <div>
                <button className='hover:cursor-pointer' onClick={handlePrev}>
                  <img src={arroLeft} alt="Previous" />
                </button>
              </div>
              <div>
                <button className='hover:cursor-pointer' onClick={handleNext}>
                  <img src={arroRight} alt="Next" />
                </button>
              </div>
            </div>
          </div>

          {/* Carrossel */}
          <div className='w-full overflow-hidden mb-[150px]'>
            <Slider ref={sliderRef} {...settings}>
              {highlightedProducts.map((product: Product) => (
                <div key={product.id} className="p-2">
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative flex flex-col items-center w-[500px] ">
                    <span className="absolute top-2 right-2 bg-emerald-100 text-emerald-900 text-xs border-1 border-emerald-50 px-3 py-1 rounded-lg shadow-md">
                      {product.category}
                    </span>
                    <div className="w-full aspect-square overflow-hidden flex justify-center items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 w-full">
                      <h3 className="text-lg font-semibold font-inter text-slate-600 hover:underline cursor-pointer" onClick={() => window.location.href = `/products/${product.id}`}>
                        {product.name}
                      </h3>
                      {product.discount > 0 ? (
                    <div className="flex items-center space-x-2">
                    <p className="text-slate-500 mt-2 ">${product.discountedPrice.toFixed(2)}</p>
                    <p className="text-slate-400 mt-2 line-through mr-2">${product.price.toFixed(2)}</p>
                  </div>
                ) : (
                  <p className="text-slate-500 mt-2">${product.price.toFixed(2)}</p>
                )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;