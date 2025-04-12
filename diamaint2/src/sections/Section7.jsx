import React from 'react'
import brackets from '../assets/section7/brackets.png'
import image1 from '../assets/section7/image1.png'
import image2 from '../assets/section7/image2.jpg'
import image3 from '../assets/section7/image3.jpg'
import sideImg from '../assets/section7/sideImg.png'

const Section7 = () => {
  return (
    <section className='flex justify-center items-center pt-40' id='obj-4'>
      <div className='flex items-center'>
        
        <div>
            <h1 className='authors w-min mb-[55px]'>Авторы и <br />идеологи</h1>

            <p className='section7-text font-medium text-5 leading-[200%] text-[#515076] mb-[14px]'>Маша Шестякова</p>

            <p className='font-medium text-4 leading-[180%] text-[#888794] w-[665px] mb-10'>Маша — главный идеолог, создатель проекта и по совместительству главный добытчик рецептов. Машиной фишкой является бабушка-ирландка, бывшая модель с бесконечным запасом проверенных на себе народных рецептов. </p>

            <div className='flex items-start gap-10.5 mb-[70px]'>
                <img src={brackets} alt="brakcets" />
                <p className='section7-text font-semibold text-4 leading-[160%] text-[#888794] w-[554px]'>Мне нравится адаптировать культуру моих предков к современности. Я чувствую, что создаю нить между разными эпохами. И то, что мой продукт делает девушек красивыми и уверенными в себе, помогает мне чувствовать себя счастливой!</p>
            </div>

            <div className='flex items-center gap-[63px]'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
        </div>

        <div>
            <img src={sideImg} alt="" className='w-[603px] h-[671px] object-cover'/>
        </div>


      </div>
    </section>
  )
}

export default Section7
