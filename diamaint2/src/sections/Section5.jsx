import React from 'react'
import mainImg from '../assets/section5/mainImg.png'
import diamaint from '../assets/section5/Diamaint.png'
import flower from '../assets/section5/Mask Group.png'

const Section5 = () => {
  const screeWidth = window.innerWidth;


  return (
    <section className='relative bg-[#EDECF6] flex lg:justify-center lg:items-center md:items-start lg:pt-[133px] lg:pr-[702px] lg:pb-[69px] lg:pl-[169px] h-[1023px] sm:mt-[352px]'>
      <img src={diamaint} alt="diamaint" className='absolute sm:top-[-8%] sm:left-[0px] top-[-3%] left-[30px] sm:w-[1372px] w-[320px]' />
      <div>
        <img src={mainImg} alt="main image" className='sm:mt-0 mt-[700px]'/>

        <div className='sm:w-[623px] w-[300px] absolute lg:top-[330px] md:top-[500px] lg:right-[130px] md:right-[-50px] lg:bottom-[210px] md:bottom-[100px] top-[100px] right-[15%] z-10'>


            <p className="font-[Montserrat] font-medium text-base leading-[180%] tracking-[0.3em] uppercase w-[343px] text-[#A5A3B9]">
                Протестировали и довольны результатом
            </p>
                
            <p className="font-[Montserrat] text-[120px] text-[#515076] sm:w-[300px]" >
                6800 

                <span className="font-[Montserrat] text-[70px] leading-[109%] block">
                    женщин
                </span>
            </p>

            <p className="
            font-[Montserrat] font-medium text-base leading-[200%] tracking-[0em] text-[#888794] sm:w-[462px] w-[350px] sm:mt-0 mt-[30px]">
                96% женщин заметили положительный результат уже после недели использования линейки средств. Кожа стала более ухоженной, увлажненной и напитанной. Исчезли или значительно уменьшились воспаления. А приятный аромат и легкая текстура стали отличным дополнением с утренне-вечерним ритуалам ухода.
            </p>
        </div>
      </div>

      {screeWidth < 768 ? null : <img src={flower} alt="flower image" className='absolute top-[91px] right-[17px]'/>}
    </section>
  )
}

export default Section5
