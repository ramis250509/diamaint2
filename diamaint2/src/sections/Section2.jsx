import React, { useEffect, useMemo, useState } from 'react';
import card from '../assets/section2/card.svg';
import bg from '../assets/section2/Mask Group.png';
import { Link } from 'react-router-dom';
import ProductsData from '../data/ProductsData';

const Section2 = React.memo(() => {
  const [isSmall, setIsSmall] = useState(window.innerWidth);


  const filteredProducts = useMemo(() => {
    return isSmall < 650 ? ProductsData.filter((product) => product.id !== 2) : ProductsData;
  }, [isSmall, ProductsData]);

  return (
    <section className="pt-[85px] flex justify-center relative z-10 lg:mb-30" id="target">
      <div>
        <h2 className="text-center z-10 font-montserrat font-extralight sm:text-[70px] text-[35px] leading-[76.58px] tracking-normal text-[#757AA5] mb-20">
          Выбери свой продукт
        </h2>

        <div className="flex lg:gap-8 md:gap-2 gap-2 items-end">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
            <div
              className="z-10 bg-[#F7F7FA] pt-[62px] pl-[20px] pr-[20px] pb-[18px] product-p sm:h-auto h-[400px] 
              hover:cursor-pointer"
            >
              <img src={product.img} alt="product" loading="lazy" />
              <div className="ml-[18px] product-p">
                <p className="font-[Montserrat] font-medium sm:text-[12px] text-2 leading-[24px] tracking-[0.23em] text-[#A5A3B9]">{product.use}</p>
                <p className="font-[Montserrat] font-normal sm:text-[20px] leading-[27.2px] text-[#515076]">{product.desc}</p>
                <div className="max-w-[300px] flex justify-between product-p">
                  <div className="flex gap-5">
                    {product.oldprice ? (
                      <p className="font-montserrat font-medium sm:text-[18px] leading-[24.48px] line-through text-[#515076] decoration-1.5">{product.oldprice.toLocaleString('ru-RU')}&nbsp;&#8381;</p>
                    ) : null}
                    <p className="font-[Montserrat] font-normal sm:text-[20px] leading-[27.2px] text-[#515076] gap-1">{product.price.toLocaleString('ru-RU')}&nbsp;&#8381;</p>
                  </div>
                  <img src={card} alt="card" loading="lazy" />
                </div>
              </div>
            </div>            
            </Link>
          ))}
        </div>
      </div>

      <img
        className="absolute left-[0px] sm:top-[-300px] top-[30px] rotate-y-165"
        src={bg}
        alt="background"
        loading="lazy"
      />
    </section>
  );
});

export default Section2;