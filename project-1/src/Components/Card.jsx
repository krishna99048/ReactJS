import {MoveUpRight} from "lucide-react";

const Card = ({data}) => {
    
  return (
 <>
    <div className="card w-full h-auto max-w-sm bg-green-950 rounded-[10%] p-4 text-white shadow">
      <div className="bg-green-800  text-center rounded-b-[12%] rounded-[10%] overflow-hidden">
        
          <img src={data.photo}
           alt="img"
           className="w-96 object-cover rounded-[10%] "/>
          <span className="py-1"> Free Delivery Until 30/3/2026 </span>
      </div>

      <div className="content px-6 flex justify-between items-center py-2">
        <div className="details">
          <h2 className="text-green-50 text-3xl">{data.juice_name}</h2>
          <div className="more pt-4 flex justify-between gap-2 items-center">
            <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1 " >{data.ingredients[0]}</span>
            <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1 " >{data.ingredients[1]}</span>
            <span className="text-[14px] bg-green-400/20 text-green-50 rounded-full px-2 py-1 " >{data.ingredients[2]}</span>
          </div>
        </div>

        <div className="price p-2 border-l-2 border-white ">
          <h2 className="text-4xl font-bold"> {data.price} $</h2>
          <p className="flex gap-4 items-center text-[14px]">Order Now <span className="inline-block">
            <MoveUpRight strokeWidth={3} className="w-3.5 h-3.5 "/>
            </span></p>
        </div>
      </div>
    </div>
 </>
  )
}

export default Card;
