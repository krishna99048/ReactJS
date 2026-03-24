import React, { useEffect, useState } from 'react'
import ProductCard from '../UI/ProductCard'
import axios from "axios"
import { Link } from 'react-router-dom';

const ProductBar = () => {
  const [Product, setProduct] = useState([]);

  useEffect(()=>{
    const FetchProduct = async () =>{
      try {
        let response = await axios.get("https://dummyjson.com/products");
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
        <section className='p-6 flex items-center justify-center'>
          <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
              
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