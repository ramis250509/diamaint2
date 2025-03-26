import React from 'react'
import mainImg from '../assets/section5/mainImg.png'
import diamaint from '../assets/section5/Diamaint.png'
import flower from '../assets/section5/Mask Group.png'

const Section5 = () => {
  return (
    <section className='relative bg-[#EDECF6] flex justify-center items-center pt-[133px] pr-[702px] pb-[69px] pl-[169px] h-[1023px] sm:mt-[352px]'>
      <img src={diamaint} alt="diamaint" className='absolute sm:top-[-15%] sm:left-[120px]' />
      <div className='flex'>
        <img src={mainImg} alt="main image" />

        <div className='w-[623px] absolute sm:top-[330px] sm:right-[168px] sm:bottom-[210px] z-10'>

            <p className="font-[Montserrat] font-medium text-base leading-[180%] tracking-[0.3em] uppercase w-[343px] text-[#A5A3B9]">
                Протестировали и довольны результатом
            </p>
                
            <p className="font-[Montserrat] text-[120px] text-[#515076]" >
                6800 

                <span className="font-[Montserrat] text-[70px] leading-[109%] block">
                    женщин
                </span>
            </p>

            <p className="
            font-[Montserrat] font-medium text-base leading-[200%] tracking-[0em] text-[#888794] w-[462px]">
                96% женщин заметили положительный результат уже после недели использования линейки средств. Кожа стала более ухоженной, увлажненной и напитанной. Исчезли или значительно уменьшились воспаления. А приятный аромат и легкая текстура стали отличным дополнением с утренне-вечерним ритуалам ухода.
            </p>
        </div>
      </div>

      <img src={flower} alt="flower image" className='absolute top-[91px] right-[17px]'/>
    </section>
  )
}

export default Section5
