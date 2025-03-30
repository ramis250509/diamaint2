import React from 'react'
import GoodKnow from '../components/GoodKnow'

const Section6 = () => {
  return (
    <section className='flex justify-center  relative pt-[125px]'>
  
    <div className='flex flex-col gap-18 items-center'>
      <h2 className='text-center font-[Montserrat] text-[70px] leading-[109%] text-[#757AA5] font-light'>Полезно узнать</h2>

      <div className='flex flex-col gap-6'>
        <GoodKnow />
        <GoodKnow />
      <div/>

      </div>

      <div>
          <div className='flex gap-4'>
              <GoodKnow position={{position: 'absolute' ,top: 498, left: 310}}/>
              <GoodKnow position={{position: 'absolute' ,top: 402, right: 310}}/>
          </div>
      </div> 

      </div>
    </section>
  )
}

export default Section6
