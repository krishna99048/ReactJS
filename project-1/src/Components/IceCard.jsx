import React from 'react'

const IceCard = () => {
  return (
    <>
        <div className="card  bg-amber rounded-4xl  w-full max-w-sm overflow-hidden shadow-2xl ">
            
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vnM2cIFeqh6ji6yBGgXKLqcaBeO0KxY1SQ&s" alt="" />
                <div className="content  px-6 py-3">
                <h1 className='font-extrabold text-2xl'>Vanilla ice cream</h1>

                <div className="more pt-4 ">
                    <span className="text-[14px] bg-amber-200 rounded-full px-2 py-1 ">Vegan</span>
                    <span className="text-[14px] bg-amber-200 rounded-full px-2 py-1 ">Gluten free</span>
                    <span className="text-[14px] bg-amber-200 rounded-full px-2 py-1 ">Organic</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <div className="more pt-4">
                    <span >Toppings</span>
                    <span className="text-[14px] bg-amber-200 rounded-full px-2 py-1 "> Choco chips</span>
                    <span className="text-[14px] bg-amber-200 rounded-full px-2 py-1 ">Nuts</span>
                </div>
                <div className="price p-2 border-l-2 border-white ">
                <h2 className="text-4xl font-bold"> $10.00</h2>
                <div className='flex  items-center bg-amber-200 text-white rounded-full gap-2 px-3 py-1'>
                    <button>Add to cart 🍦</button>
                </div>
          
        </div>
            </div>
        </div>
    </>
  )
}

export default IceCard