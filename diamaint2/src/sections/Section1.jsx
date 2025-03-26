
import React, { useState, useEffect } from 'react';
import flower from '../assets/section1/flower.svg';
import blueber from '../assets/section1/blueber.svg';
import leaves from '../assets/section1/leaves.png';
import { Link } from 'react-scroll';

const Section1 = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth);

  useEffect(() => {
    const windowRes = () => window.addEventListener('resize', () => setIsScreenSmall(window.innerWidth));
    windowRes();
    return () => window.removeEventListener('resize', () => setIsScreenSmall(window.innerWidth));
  },[])

  return (
    <section>
      <div className='flex justify-center mt-[0px] sm:mt-[127px] relative'>
        <div className='w-[1280px]'>
          <h1
            className="font-serif sm:mb-[1733px] mb-[1500px] sm:text-[230px] leading-[212.52px] text-[50px] text-[#515076] relative z-10 sm:text-left text-center md:text-[150px]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Diamaint
          </h1>

          <div className='absolute top-[332px] lg:left-[630px] md:left-[230px] left-1/5 text-center z-10 flex flex-col'>
            <p className='text-style mb-4'>
              Diamaint — <span className="text-[#8888A8] font-semibold">одуванчик</span> в переводе <br /> c ирландского
            </p>

            <p className='text-style mb-7'>Косметика, после которой вы уже <br /> никогда не будете прежней и обретёте <br /> новую жизнь, где наша продукция будет <br /> вашим верным спутником и <br /> помощником</p>

            <p className='text-style mb-20'>Используем всю силу природы, а так же <br /> новейшие разработки индустрии вкупе <br /> традиционными ирландскими <br /> рецептами для того, чтобы придать <br /> вашей коже здоровый и цветущий вид</p>

            <Link to='target' smooth={true} duration={500} className='inline-block text-center'>
              <button className='mb-19 hover:opacity-90 duration-300 cursor-pointer bg-[#515076] text-white font-[Montserrat] font-semibold sm:text-[13px] text-[8px] leading-[15.85px] tracking-[0.32em] sm:p-7 p-2 rounded-[100px] z-10'>Выбрать продукт</button>
            </Link>

            <p className='text-style'>В основе — активные натуральные <br /> комплексы, витамины С, А, РР, В И Е, <br /> масла, воски, минералы и натуральные <br /> солнцезащитные компоненты. </p>
          </div>

          {isScreenSmall < 770 ? '' : <img className='absolute top-[-240px] left-[335px] w-[1240px]' src={flower} alt="flower-img"/>}

          <img src={leaves} alt="leaves-img" className='absolute top-[505px] left-[0px]' />
          {isScreenSmall < 650 ? '' : (
            <p className='font-[Montserrat] font-normal text-[18px] sm:text-[36px] leading-[47.76px] text-[#63678C] w-[320px] absolute sm:top-[435px] top-[332px] lg:left-[150px] sm:left-[170px] left-0 md:left-5'>
              Натуральная <br /> косметика <br /> c привкусом <br /> Ирландии
            </p>
          )}

          {isScreenSmall < 770 ? '' :
          <p className="font-[Work_Sans] font-medium text-[16px] leading-[28.8px] tracking-[30%] text-[#888794] text-center absolute lm:left-[1226px] left-[1080px] top-[989px] w-[172px] h-[127px] z-10">
            Подбираем <br /> комплекс <br /> специально для <br /> вашего типа кожи
          </p>}

          {isScreenSmall < 770 ? '' : <p className="font-[Montserrat] font-light text-[36px] leading-[39.38px] text-[#757AA5] absolute left-[1039px] top-[1213px] z-10">
            Diamaint — только <br /> натуральные <br /> ингридиенты
          </p>}

          <p className="font-[Montserrat] font-normal text-[18px] leading-[30.6px] text-[#888794] absolute top-[1286px] sm:left-[335px] z-10 left-1/8 text-center sm:text-left md:left-[170px]">
            Ингридиенты контролируются по <br /> качеству и происхождению. <br /> Большинство из них имеют <br /> органический сертификат Ecoсert и Soil <br /> Association. Сочетание компонентов в <br /> каждой линейке подобрано с учетом <br /> особенностей типа кожи.
          </p>

          {isScreenSmall < 770 ? '' : <img className='absolute top-[777px] left-[160px] sm:w-[1300px] w-[1500px]' src={blueber} alt="blueber" />}
        </div>
      </div>
    </section>
  );
};

export default Section1;
