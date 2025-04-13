import React from 'react'
import GoodKnow from '../components/GoodKnow'

const Section6 = () => {
  const screen = window.innerWidth;
  return (
    <section className='flex justify-center  relative pt-[125px]' id='obj-3'>
  
    <div className='flex flex-col gap-18 items-center'>

      <h2 className='text-center font-[Montserrat] text-[70px] leading-[109%] text-[#757AA5] font-light'>Полезно узнать</h2>

      <div className='flex flex-col gap-[30px]'>
        <GoodKnow />
        <GoodKnow />
        <GoodKnow className={`lg:absolute lg:top-[498px] ${screen === 1024 ? 'lg:left-[40px]' : 'lg:left-[160px]'}`} />
        <GoodKnow className={`lg:absolute lg:top-[402px] ${screen === 1024 ? 'lg:right-[40px]' : 'lg:right-[160px]'} `} />
      <div/>

      </div>

    </div>
    </section>
  )
}

export default Section6
