import React from 'react'
import card from '../assets/section2/card.svg';

const SaleBox = (
  {
   num, img, img2, img3, text, oldPrice,
   newPrice, height, saleHeight, imageGap,
   boldness, imageW, imageH 
  }
  ) => {
  return (
    <div className='w-[350px] flex flex-col' style={{height: `${height}px`}}>

        <div className='three-p-sale-box' style={{height: `${saleHeight}px`}}>
            <p style={{fontWeight: `${boldness}`}}>Скидка {num}%</p>
        </div>

        <div className='bg-[#F7F7FA] flex flex-col items-center flex-1'>
          <img src={img} alt="img" style={{marginTop: `${imageGap}px`, height: `${imageH}`, width: `${imageW}px`}} />
          
          <div className='pl-[40px] pr-[40px] pb-[78p] mt-2.5'>
            <p className='three-desc-sale-box'>{text}</p>

            <div className='flex w-[266px] justify-between items-center mt-3'>
                <div className='flex justify-center gap-4 three-prize-sale-box'>
                    <p className='text-gray-500 line-through'>{oldPrice} &#8381;</p>
                    <p className='text-[#515076]'>{newPrice} &#8381;</p>
                </div>

                <img src={card} alt="card" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default SaleBox