import { useParams } from 'react-router-dom';
import ProductsData from '../data/ProductsData';
import PaymentForm from '../components/PaymentForm';
import SaleBox from '../components/SaleBox';
import Jars from '../data/Jars';
import ProductCom from '../components/ProductCom';

function ProductPage() {
  const { id } = useParams();
  const IdArr = id-4;

  return (
    <div className="mt-[50px]  sm:mt-[150px] flex justify-center">
      <div className='flex sm:flex-row flex-col items-center gap-10 sm:gap-30'>
        {id > 3 ? <SaleBox num={Jars[IdArr].num} img={Jars[IdArr].img} text={Jars[IdArr].text} oldPrice={Jars[IdArr].oldPrice} newPrice={Jars[IdArr].newPrice} height='700' saleHeight='150' imageGap='57' boldness='500'
              imageH='305' imageW='350'/> : <ProductCom/>}
        <PaymentForm/>

      </div>           
    </div>
  );
}
export default ProductPage