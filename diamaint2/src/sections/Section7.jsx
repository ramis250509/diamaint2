import React from 'react'
import brackets from '../assets/section7/brackets.png'
import image1 from '../assets/section7/image1.png'
import image2 from '../assets/section7/image2.jpg'
import image3 from '../assets/section7/image3.jpg'
import sideImg from '../assets/section7/sideImg.png'
import { useState } from 'react'

const Section7 = () => {
  const [ width,setWidth ] = useState(window.innerWidth)
  const [ readMore, setReadMore ] = useState(false);

  const handleClickReadMore = () => setReadMore(!readMore);

  const longText = "Мне нравится адаптировать культуру моих предков к современности. Я чувствую, что создаю нить между разными эпохами. И то, что мой продукт делает девушек красивыми и уверенными в себе, помогает мне чувствовать себя счастливой!";
  const shortText = "Мне нравится адаптировать культуру моих предков к современности. Я..."
  return (
    <section className='flex justify-center items-center pt-40' id='obj-4'>
      <div className='flex lg:items-end md:items-center items-center'>
        
        <div className='lg:block md:block flex flex-col justify-center items-center'>
            <h1 className='authors w-min mb-[55px] lg:text-[70px] md:text-[50px] text-[30px]'>Авторы и <br />идеологи</h1>

            <p className='section7-text font-medium text-[20px] leading-[200%] text-[#515076] mb-[14px]'>Маша Шестякова</p>

            <p className='font-medium text-4 leading-[180%] text-[#888794] lg:w-[665px] md:w-[400px] w-[200px] mb-10 md:text-left text-center'>Маша — главный идеолог, создатель проекта и по совместительству главный добытчик рецептов. Машиной фишкой является бабушка-ирландка, бывшая модель с бесконечным запасом проверенных на себе народных рецептов. </p>

            <div className='flex items-start lg:gap-10.5 md:gap-8 gap-3 mb-[70px]'>
                <img src={brackets} alt="brakcets" />
                <p onClick={handleClickReadMore} className='section7-text font-semibold text-[18px] leading-[160%] text-[#888794] lg:w-[554px] md:w-[354px] w-[154px]'>
                  {width < 640 ? (readMore ? longText : shortText) : longText}
                </p>
            </div>

            <div className='flex lg:flex-row md:flex-col flex-col items-center lg:gap-[63px] md:gap-10 gap-5'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>

        {
        width < 640 ? "" : <div>
                                <img src={sideImg} alt="" className='w-[603px] h-[671px] object-cover'/>
                            </div>
        }


      </div>
    </section>
  )
}

export default Section7
