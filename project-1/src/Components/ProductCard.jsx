import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const ProductCard = ({data}) => {
  return (
    <>
        <div className='card bg-white rounded-4xl p-4 w-full max-w-sm overflow-hidden shadow-2xl relative'>
            <div className='absolute z-10 top-6 left-5'>
                <div className="flex items-center justify-between gap-52">
                <div className='bg-white/30 px-3 py-1 text-sm font-medium text-white rounded-full'>Best Seller</div>
                <img src="https://www.citypng.com/public/uploads/preview/black-nike-logo-transparent-background-701751694777156f3ewilq1js.png" alt="logo" className='rounded-full w-10 bg-white '/>
            </div>
            </div>
             <img src={data.photo} alt=""  className='w-full h-84 object-cover rounded-4xl drop-shadow-2xl'/>

             <div className="content px-6 py-3">
                <h1 className='font-extrabold text-2xl'>
                    
                </h1>
                <p className='font-bold text-xl text-gray-400/60 mb-2'>{data.product_name}</p>
                <p className='text-gray-400/60 font-medium mb-2 text-md'>{data.details}</p>
                <div className="price flex items-center justify-between mt-2">
                    <h1 className='rounded-full bg-gray-200 px-3 py-1  font-bold'>{data.price}</h1>
                    <div className='flex  items-center bg-black text-white rounded-full gap-2 px-3 py-1'>
                        <button >Buy Now</button>
                     <ArrowUpRight className=' w-5 h-5 bg-white text-black rounded-full p-0.5'/>
                    </div>
                </div>
             </div>
        </div>
    </>
  )
}

export default ProductCard