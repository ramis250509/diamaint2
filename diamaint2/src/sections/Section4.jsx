import React from 'react'
import jar1 from '../assets/section4/jar1.svg'
import jar2 from '../assets/section4/2.png'
import jar3 from '../assets/section4/3.png'
import SaleBox from '../components/SaleBox'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Jars from '../data/Jars'
const Section4 = () => {

  const [screenW, setScreenW] = useState(window.innerWidth);
  return (
    <section className='flex justify-center mb-[120px]'>
        <div className={`flex lg:flex-row md:flex-col flex-col  items-end ${screenW === 1024 ? 'lg:gap-[10px]' : 'lg:gap-[35px]'}`}>
            <Link to={`/product/${Jars[0].id}`}>
              <SaleBox num={Jars[0].num} img={Jars[0].img} text={Jars[0].text} oldPrice={Jars[0].oldPrice} newPrice={Jars[0].newPrice} height='600' saleHeight='100' imageGap='7' boldness='400' imageH='305' imageW='350'/>
            </Link>

            <Link to={`/product/${Jars[1].id}`}>
              <SaleBox num={Jars[1].num} img={Jars[1].img} text={Jars[1].text} oldPrice={Jars[1].oldPrice} newPrice={Jars[1].newPrice} height='700' saleHeight='150' imageGap='57' boldness='500'
              imageH='305' imageW='350'/>          
            </Link>

            <Link to={`/product/${Jars[2].id}`}>
              <SaleBox num={Jars[2].num} img={Jars[2].img} text={Jars[2].text} oldPrice={Jars[2].oldPrice} newPrice={Jars[2].newPrice} height='800' saleHeight='200' imageGap='107' boldness='600'
              imageH='305' imageW='350'/>
            </Link>
        </div>
    </section>
  )
}

export default Section4
