import React from 'react'
import jar1 from '../assets/section2/jar3.svg';
import jar2 from '../assets/section2/jar1.svg';
import jar3 from '../assets/section2/jar4.svg';
import sale from '../assets/section2/sale.svg';

const ProductsData = [
    {
        id: 1,
        use: 'для нормальной кожи',
        desc: 'Увлажняющий мусс',
        img: jar1,
        price: 2750,
    },
    {
        id: 2,
        use: 'для нормальной кожи',
        desc: 'Увлажняющая маска',
        img: jar2,
        oldprice: 3750,
        price: 3600,
        sale: sale,
    },
    {
        id: 3,
        use: 'для нормальной кожи',
        desc: 'Гель для умывания', 
        img: jar3,
        price: 1650,
    }
]

export default ProductsData
