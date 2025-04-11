import React from 'react'
import line from '../assets/section6/Line 3.png'


const GoodKnow = ({ className }) => {
  if (className) {
    console.log(className)
  }
  return (
    <div
     
    className={`border-t-6 border-[#515076] w-[300px] bg-[#F7F7FA] pl-[48px] pt-[36px] pr-[14px] pb-[35px] relative ${className ? className : ''}`}>

      <div className=''>
        <p className='text-[#A5A3B9] font-[Montserrat] text-[12px] font-medium tracking-[0.23em] uppercase mb-1 leading-[200%]'>Совет</p>

        <p className='w-[211px] font-[Montserrat] font-normal text-[#515076] text-[20px] leading-[136%] mb-7 tracking-[0em]'>Что добавить к зимнему уходу</p>

        <p className='font-[Montserrat] font-normal text-[14px] leading-[180%] text-[#888794] w-[237px] mb-21'>Зимой кожа лица особенно остро нуждается в уходе. Холод и ветер, сухость воздуха отапливаемых помещений...</p>

        <p className='font-[Montserrat] font-medium text-[12px] tracking-[0.23em] uppercase text-[#515076] leadig-[200%]'>читать</p>

      </div>

      <img src={line} alt="line image" className='absolute left-[14px] top-[340px]'/>
    </div>
  )
}

export default GoodKnow
