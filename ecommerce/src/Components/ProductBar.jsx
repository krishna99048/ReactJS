import React, { useEffect, useState } from 'react'
import ProductCard from '../UI/ProductCard'
import axios from "axios"
import { Link } from 'react-router-dom';

const ProductBar = () => {
  const [Product, setProduct] = useState([]);

  useEffect(()=>{
    const FetchProduct = async () =>{
      try {
        let response = await axios.get("https://dummyjson.com/products?limit=4");
        console.log(response.data.products);
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    FetchProduct();
  }, []);
  return (
    <>
        <section className='p-6 flex flex-col items-center justify-center px-24'>
          <div className='w-full '>
            <h3 className='w-full text-gray-300 font-semibold'>
              Our Product
            </h3>
            <div className='flex items-center justify-between'>
              <h1 className='text-5xl font-semibold py-2'>Our Top Seller Products</h1>
              <div className='flex items-center justify-center gap-2'>
                <div className='px-3 py-1 border bg-[#583101] font-medium text-md inline-block'>All</div>
                <div className='px-3 py-1 border text-[#583101] font-medium text-md inline-block'>Women</div>
                <div className='px-3 py-1 border text-[#583101] font-medium text-md inline-block'>Man</div>
                <div className='px-3 py-1 border text-[#583101] font-medium text-md inline-block'>Accessories</div>
              </div>
            </div>
          </div>

          {/* Product Cards */}

          <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full'>
              
            {Product.map((data) => {
                return (
                  <Link to = {`/product/${data.id}` } key={data.id} >
                    <ProductCard  product_data={data} />
                  </Link>
                )
            })}  
          
          </div>
        </section>
    </>
  )
}

export default ProductBar