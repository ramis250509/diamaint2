import React from 'react'
import jar1 from '../assets/section4/jar1.svg'
import jar2 from '../assets/section4/2.png'
import jar3 from '../assets/section4/3.png'
import SaleBox from '../components/SaleBox'

const Section4 = () => {
  const jars = [
    {
    num: 5,
    text: 'Приобретая увлажняющий крем и маску, вы получаете скидку 5% на весь товар',
    img: jar1,
    oldPrice: 5000,
    newPrice: 4750,
    },
    {
    num: 10,
    text: 'Приобретая увлажняющий крем и маску, вы получаете скидку 10% на весь товар',
    img: jar2,
    oldPrice: 4400,
    newPrice: 3960,
    },
    {
    num: 20,
    text: 'Приобретая увлажняющий крем и маску, вы получаете скидку 20% на весь товар',
    img: jar3,
    oldPrice: 9400,
    newPrice: 7520,
    },
  ]

  return (
    <section className='flex justify-center sm:mt-0 m-10'>
        <div className='flex sm:flex-row flex-col  items-end gap-[35px]'>
            <SaleBox num={jars[0].num} img={jars[0].img} text={jars[0].text} oldPrice={jars[0].oldPrice} newPrice={jars[0].newPrice} height='600' saleHeight='100' imageGap='7' boldness='400' imageH='305' imageW='350'/>

            <SaleBox num={jars[1].num} img={jars[1].img} text={jars[1].text} oldPrice={jars[1].oldPrice} newPrice={jars[1].newPrice} height='700' saleHeight='150' imageGap='57' boldness='500'
            imageH='305' imageW='350'/>

            <SaleBox num={jars[2].num} img={jars[2].img} text={jars[2].text} oldPrice={jars[2].oldPrice} newPrice={jars[2].newPrice} height='800' saleHeight='200' imageGap='107' boldness='600'
            imageH='305' imageW='350'/>
        </div>
    </section>
  )
}

export default Section4
