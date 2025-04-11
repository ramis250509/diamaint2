import React, { use } from 'react'
import jar2 from '../assets/section2/jar1.svg'
import { useState, useEffect } from 'react'
import fgs from '../assets/section3/для нормальной кожи.png'

const Section3 = () => {
  // STATES

  const [isButton, setIsbutton] = useState();
  const [ScreenSmall, setScreenSmall] = useState(window.innerWidth < 1025);
  const [screen, setScreen] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);
  const pInfo = [
    [
    "Invisible symphony1 — ваша волшебная палочка для борьбы с несовершенствами",
    "Invisible symphony2 — ваша волшебная палочка для борьбы с несовершенствами", 
    "Invisible symphony3 — ваша волшебная палочка для борьбы с несовершенствами"
    ],
    [
    "Сочетая энергию природы и возможности науки восстанавливает вашу кожу, помогает регенерации клеток, разглаживает рельеф, интенсивно увлажняет надолго.1",
    "Сочетая энергию природы и возможности науки восстанавливает вашу кожу, помогает регенерации клеток, разглаживает рельеф, интенсивно увлажняет надолго.2", 
    "Сочетая энергию природы и возможности науки восстанавливает вашу кожу, помогает регенерации клеток, разглаживает рельеф, интенсивно увлажняет надолго.3"
    ],
    [
      1,
      2,
      3
    ]
  ];

  // FUNCTIONS
  const handleClick = (id) => {

    if (id === 1) {
      setCounter(counter - 1);
      setIsbutton(1);
      colRemove(0);
    } else {
      setCounter(counter + 1);
      setIsbutton(2)
      colRemove(0)
    }
  }

  const colRemove = (num) => {
    setTimeout(() => {
      setIsbutton(num)
    },500)
  }

  if (counter > pInfo[0].length - 1 || counter < 0) {
    setCounter(0);
  }

  return (
    <section className='flex lg:flex-row md:flex-col flex-col lg:gap-[20px] md:gap-0 gap-[210px] justify-center text-[#757AA5] sm:mt-[180px] pt-[120px]' id='obj-2'>

      {/* Left side of the Section3 Arrows and Stocks */}

      <div className='z-10 lg:mb-[500px] md:mb-[130px] mb-[100px] lg:block sm:flex sm:flex-col sm:justify-center sm:items-center'>
        <h2 className="font-[Montserrat] font-[275] text-[70px] leading-[76.58px] text-[#757AA5] mb-25 lg:text-left md:text-center text-center"
        >Акции</h2>
        <p className={`"font-[Montserrat] font-medium lg:text-lg md:text-[35px] text-5 leading-9 mb-12.5 text-[#888794] sm:w-[333px] w-[${screen}px] text-left"`}
        >Каждый месяц мы отбираем специальную линейку продуктов, которая нравится вам и снижаем цены!</p>
        {ScreenSmall ? '' : <div className="flex gap-5">
          <button onClick={() => handleClick(1)} className={`arrow-left-right lg:text-[40px] md:text-[70px] text-[40px] lg:w-[62px] md:w-[114px] w-[62px] ${isButton === 2 ? 'opacity-40' : ''}`}>&lt;</button>
          <button onClick={() => handleClick(2)} className={`arrow-left-right lg:text-[40px] md:text-[70px] text-[40px] lg:w-[62px] md:w-[114px] w-[62px] ${isButton === 1 ? 'opacity-40' : ''}`}>&gt;</button>
        </div>}
      </div>

      {/* Right side of the Section3 Product Info */}
      <div>
        <div className={`h-[521px] relative ${ScreenSmall ? `w-[${screen}px]` : 'bg-[#515076] w-[810px]'}`}>
          {ScreenSmall ? '' : <img src={fgs} alt="for a good skin" className='absolute left-3 bottom-10'/> }

          <div className='flex sm:flex-row flex-col lg:gap-4 md:gap-0 gap-4 bg-[#F7F7FA] absolute sm:bottom-[40px] sm:left-[35px] bottom-[0px] left-[0px] lg:pt-[58px] lg:pl-[62px] lg:pb-[72px] md:pt-[40px] md:pl-[10px] md:pr-[10px] md:pb-[40px] pt-[0px] pl-[0px] pb-[0px]'>
            <div>
                <div className='bg-#EDECF6 font-[Montserrat] font-[400] text-4.5  text-[#515076] rounded-[50%] bg-[#EDECF6] sm:w-16 sm:h-16 w-12 h-12 flex justify-center items-center mb-4'>0{pInfo[2][counter]}</div>
                <p className='font-[Montserrat] font-light text-[30px] leading-10  text-[#4C5072] w-[337px] mb-5 text-left'>{pInfo[0][counter]}</p>
                <p className={`font-[Montserrat] font-medium text-base leading-8 text-[#888794] sm:w-auto`}
                >{pInfo[1][counter]}</p>
            </div>
            <img src={jar2} alt="jar2" className=''/>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Section3
