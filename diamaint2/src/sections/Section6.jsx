import React from 'react'
import GoodKnow from '../components/GoodKnow'

const Section6 = () => {
  return (
    <section className='flex justify-center  relative pt-[125px]'>
  
    <div className='flex flex-col gap-18 items-center'>

      <h2 className='text-center font-[Montserrat] text-[70px] leading-[109%] text-[#757AA5] font-light'>Полезно узнать</h2>

      <div className='flex flex-col gap-[30px]'>
        <GoodKnow />
        <GoodKnow />
        <GoodKnow className='sm:absolute sm:top-[498px] sm:left-[160px]' />
        <GoodKnow className='sm:absolute sm:top-[402px] sm:right-[160px]' />
      <div/>

      </div>

    </div>
    </section>
  )
}

export default Section6
