import React from 'react'
import Card from './Components/Card';
import ProductCard from './Components/ProductCard';


const App = () => {
  // const data = [
    
  // {
  //   "photo": "https://i.pinimg.com/736x/05/8f/c9/058fc9b005768b24e9fe4767a7a1d232.jpg",
  //   "juice_name": "Kiwi Juice",
  //   "ingredients": ["Kiwi", "Milk", "Ice"],
  //   "price": 12
  // },
  // {
  //   "photo": "https://www.kitchentreaty.com/wp-content/uploads/2025/03/fresh-squeezed-orange-juice-2-500x500.jpg",
  //   "juice_name": "Orange Juice",
  //   "ingredients": ["Orange", "Ice", "Sugar"],
  //   "price": 10
  // },
  // {
  //   "photo": "https://media.istockphoto.com/id/178416773/photo/some-glasses-with-strawberry-liqueur.jpg?s=612x612&w=0&k=20&c=wo7eqLKBOV-FQZ15Lo7A3RMLPAdvwbkVPqlZm_GM9pc=",
  //   "juice_name": "Strawberry Juice",
  //   "ingredients": ["Strawberry", "Milk", "Honey"],
  //   "price": 14
  // },
  // {
  //   "photo": "https://untoldrecipesbynosheen.com/wp-content/uploads/2022/04/mango-juice-featutred.jpg",
  //   "juice_name": "Mango Juice",
  //   "ingredients": ["Mango", "Ice", "Sugar"],
  //   "price": 11
  // },
  // {
  //   "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4K77eB7xDM4vq_d0Vy4uzMYPUik7sQI_kqQ&s",
  //   "juice_name": "Pineapple Juice",
  //   "ingredients": ["Pineapple", "Ice", "Mint"],
  //   "price": 13
  // },
  // {
  //   "photo": "https://www.rebootwithjoe.com/wp-content/uploads/2012/05/watermelon-pineapple-juice.jpg",
  //   "juice_name": "Watermelon Juice",
  //   "ingredients": ["Watermelon", "Ice", "Mint"],
  //   "price": 9
  // },
  // {
  //   "photo": "https://tandobeverage.com/wp-content/uploads/apple-juice.jpg",
  //   "juice_name": "Apple Juice",
  //   "ingredients": ["Apple", "Ice", "Honey"],
  //   "price": 10
  // },
  // {
  //   "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDxudY5RjvCc0p4c-FKZ9f8XMLOOfCtQ8kw&s",
  //   "juice_name": "Banana Shake",
  //   "ingredients": ["Banana", "Milk", "Honey"],
  //   "price": 12
  // },
  // {
  //   "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CIHHxNeCrSUJrgvYQ9MdJEzXLAPqq0AeSw&s",
  //   "juice_name": "Avocado Smoothie",
  //   "ingredients": ["Avocado", "Milk", "Honey"],
  //   "price": 15
  // },
  // {
  //   "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu57oOEqUtX5yDnw-ZmuOARbfsNNNrLKkKgg&s",
  //   "juice_name": "Mixed Fruit Juice",
  //   "ingredients": ["Apple", "Mango", "Orange"],
  //   "price": 16
  // }

  // ];
 
 const Product = [
  {
    "photo": "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495&width=400",
    "product_name": "Wireless Headphones",
    "price": "$79",
    "tagline": "Feel the pure sound",
    "details": "Noise-cancelling wireless headphones with long battery life and deep bass."
  },
  {
    "photo": "https://gourban.in/cdn/shop/files/Pulse.jpg?v=1749553994&width=2048",
    "product_name": "Smart Watch",
    "price": "$129",
    "tagline": "Your health companion",
    "details": "Track fitness, heart rate, and notifications with this stylish smart watch."
  },
  {
    "photo": "https://i.pinimg.com/736x/64/14/99/64149999d340b2b1ee0b7e802c936f29.jpg",
    "product_name": "Bluetooth Speaker",
    "price": "$59",
    "tagline": "Music everywhere",
    "details": "Portable waterproof speaker with powerful bass and 12-hour playtime."
  },
  {
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvqNU2qSY3IcSCVHZe3uxenF0VV0kLfe3yTQ&s",
    "product_name": "Gaming Mouse",
    "price": "$39",
    "tagline": "Precision for gamers",
    "details": "High-speed gaming mouse with RGB lighting and adjustable DPI."
  },
  {
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2AtidoK77Bl6fjZ0_ROfxJIyhhUrHI6TRWA&s",
    "product_name": "Mechanical Keyboard",
    "price": "$99",
    "tagline": "Type like a pro",
    "details": "Durable mechanical keyboard with tactile switches and RGB backlight."
  },
  {
    "photo": "https://media.wired.com/photos/6969603d008f03b7d52d8d5a/4:3/w_640%2Cc_limit/DJI%2520Osmo%2520Action%25206%2520front%2520SOURCE%2520Scott%2520Gilbertson.png",
    "product_name": "4K Action Camera",
    "price": "$149",
    "tagline": "Capture every adventure",
    "details": "Compact action camera with 4K recording and waterproof case."
  },
  {
    "photo": "https://viperpc.in/wp-content/uploads/2025/11/download-5-9.webp",
    "product_name": "Portable SSD",
    "price": "$119",
    "tagline": "Speed meets storage",
    "details": "Ultra-fast portable SSD with 1TB capacity and durable design."
  },
  {
    "photo": "https://ambraneindia.com/cdn/shop/files/magsafe-wireless-charger.webp?v=1764316311&width=1000",
    "product_name": "Wireless Charger",
    "price": "$25",
    "tagline": "Charge without cables",
    "details": "Fast wireless charging pad compatible with all Qi-enabled devices."
  },
  {
    "photo": "https://deq64r0ss2hgl.cloudfront.net/images/product/laptop-stand-96949611553662.jpg",
    "product_name": "Laptop Stand",
    "price": "$45",
    "tagline": "Work comfortably",
    "details": "Ergonomic aluminum laptop stand that improves posture and cooling."
  },
  {
    "photo": "https://syska.co.in/blog/wp-content/uploads/2023/07/Syska_Smart_Lights.jpeg",
    "product_name": "Smart LED Bulb",
    "price": "$19",
    "tagline": "Light your mood",
    "details": "WiFi-enabled smart bulb with customizable colors and voice control."
  }
]



  return (
    <>
      {/* <section className="flex flex-wrap gap-6 py-4 justify-center items-center">
       

        {data.map(function(juice){
         return <Card data={juice} />
        })}
      
      </section> */}

      <section className='flex items-center flex-wrap py-4 px-6 gap-6'>
        {Product.map(function (data){
          return <ProductCard data = {data} />
        })}
        
      </section>
      
    </>
  );
};

export default App;