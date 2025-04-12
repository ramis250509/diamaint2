import React from 'react'
import bg from '../assets/section8/bg.png'
import facebook from '../assets/section8/facebook.png'
import insta from '../assets/section8/insta.svg'

const Section8 = () => {
  return (
    <section
    className="pt-[228px] pb-[301px] lg:pl-[260px] lg:block flex justify-center bg-cover bg-center mt-40"
    style={{ backgroundImage: `url(${bg})` }}
    id='obj-1'
    >

      <div className='pt-[50px] md:pl-[78px] pl-[10px] pb-[66px] md:pr-[130px] pr-[10px] w-min bg-white shadow-[0px_-6px_0px_0px_#515076]'>
        <h1 className='section7-text text-[70px] leading-[109%] text-[#757AA5] font-extralight mb-[33px] w-min'>Контакты</h1>

        <p className='address-number'>+7 495 550 50 50</p>
        <p className='address-number'>Москва, Пресенский Вал 21</p>

        <div className='flex gap-5 w-min'>
          <img src={facebook} alt="facebook" />
          <img src={insta} alt="instagram" />
        </div>
      </div>

    </section>

  )
}

export default Section8
