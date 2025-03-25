import React from 'react'
import card from '../assets/section2/card.svg';

const SaleBox = ({num, img, img2, img3, text, oldPrice, newPrice, height}) => {
  return (
    <div className='w-[350px]' style={{height: `${height}px`}}>

        <div className='three-p-sale-box'>
            Скидка {num}%
        </div>

        <div className='bg-[#F7F7FA]'>
          <img src={img} alt="img" />
          
          <div className='pl-[40px] pr-[40px] pb-[78p]'>
            <p className='three-desc-sale-box'>{text}</p>

            <div className='flex w-[266px] justify-between items-center'>
                <div className='flex justify-center gap-4'>
                    <p>{oldPrice} &#8381;</p>
                    <p>{newPrice} &#8381;</p>
                </div>

                <img src={card} alt="card" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default SaleBox
