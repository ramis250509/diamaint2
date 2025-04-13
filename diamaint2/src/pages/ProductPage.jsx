import { useParams } from 'react-router-dom';
import ProductsData from '../data/ProductsData';
import PaymentForm from '../components/PaymentForm';
function ProductPage() {
  const { id } = useParams();
  const idProdArr = id - 1;
  
  return (
    <div className="mt-[50px]  sm:mt-[150px] flex justify-center">
      <div className='flex sm:flex-row flex-col items-center gap-10 sm:gap-30'>

        <div
          className="z-10 bg-[#F7F7FA] pt-[62px] pl-[20px] pr-[20px] pb-[18px] product-p sm:h-auto h-[400px] 
          hover:cursor-pointer"
        >
          <img src={ProductsData[idProdArr].img} alt="product" loading="lazy" className='w-min'/>
          <div className="ml-[18px] product-p">
            <p className="font-[Montserrat] font-medium sm:text-[12px] text-2 leading-[24px] tracking-[0.23em] text-[#A5A3B9]">{ProductsData[idProdArr].use}</p>
            <p className="font-[Montserrat] font-normal sm:text-[20px] leading-[27.2px] text-[#515076]">{ProductsData[idProdArr].desc}</p>
            <div className="max-w-[300px] flex justify-between product-p">
              <div className="flex gap-5">
                {ProductsData[idProdArr].oldprice ? (
                  <p className="font-montserrat font-medium sm:text-[18px] leading-[24.48px] line-through text-[#515076] decoration-1.5">{ProductsData[idProdArr].oldprice.toLocaleString('ru-RU')}&nbsp;&#8381;</p>
                ) : null}
                <p className="font-[Montserrat] font-normal sm:text-[20px] leading-[27.2px] text-[#515076] gap-1">{ProductsData[idProdArr].price.toLocaleString('ru-RU')}&nbsp;&#8381;</p>
              </div>
            </div>
          </div>
        </div> 
        
        <PaymentForm/>

      </div>           
    </div>
  );
}
export default ProductPage