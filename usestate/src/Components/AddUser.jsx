// import { useState } from "react"

// const AddUser = () => {
//     const [Data, setData] = useState([
//         {name:"Aarav Patel", email: "aravpatel@gmail.com", color: "bg-teal-400"},
//         {name:"Krishna  Patel", email: "krishnaaptl@gmail.com", color: " bg-purple-400"},
//         {name:"Mahek Shah", email: "mahekshah@gmail.com", color: "bg-yellow-400"},
//     ]);

//     function Add(){
//         let arr = [...Data] //Copy Array

//         arr.push({name:"Nisha Dhabhi", email: "nishu@gmail.com", color: "bg-green-400"})
//         if(Data[3]?.name === "Nisha Dhabhi"){
//             return alert("User Exsits !!!!")
//         }

//         setData(arr);

//     }


//     function Add2user (){
//         let arr1 = [...Data] //Copy Array

//         arr1.push({name:"Diya Shah", email: "diyashah@gmail.com", color: "bg-green-400"} , {name:"Arjun Singh", email: "arjunsingh@gmail.com", color: "bg-green-400"} )
//         if(Data[4] || [5]?.name === "Arjun Singh" ){
//             return alert("User Exsits !!!!")
//         }
//         setData(arr1);
        
//     }
//     // task:
//     // 1. create a btn that add two user


//   return (
//     <>
//     <section className="flex flex-wrap justify-center items-center gap-6 my-10">
//         {Data.map((user)=>{
//             return(
//                      <div className={`w-full h-auto max-w-sm rounded-xl p-2 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}>
//                         <h1 className="bg-[#222] w-full rounded-xl px-4 py-2">{user.name}</h1>
//                         <h2 className="bg-[#222] w-full rounded-xl px-4 py-2">{user.email}</h2>
//                      </div>
//             )
            
//         })}
//     </section>

//     <div className="flex justify-center items-center">
//         <button className="bg-blue-900 text-center px-6 py-4 active:bg-blue-200 active:scale-95 active:text-blue-900 text-2xl font-bold rounded-xl transition-all" onClick={Add}>Add One more user</button>
//     </div>

//       <div className="flex justify-center items-center">
//         <button className="bg-blue-900 text-center px-6 py-4 active:bg-blue-200 active:scale-95 active:text-blue-900 text-2xl font-bold rounded-xl transition-all mt-10" onClick={Add2user}>Add Two user</button>
//     </div>
      
//     </>
//   )
// }

// export default AddUser

import React from 'react'
import { useState } from 'react'

const AddUser = () => {

    const [Data, setData] = useState([{name: "Aarav Patel", email: "aaravpatel@gmail.com", color:"bg-blue-900"},
                                    {name: "Riya Sharma", email: "riyasharma@gmail.com",  color:"bg-blue-900"},
                                    {name: "Vivaan Maheta", email: "vivaanmaheta@gmail.com",  color:"bg-blue-900"}
    ]);

    function Add() {
        let arr = [...Data];
        arr.push({name: "Ananya Gupta", email: "ananyagupta@gmail.com", color: "bg-blue-900"});
            if (Data.some(user => user.name === "Ananya Gupta")) {
                return alert("User Exists !!!");
            }
        setData(arr);
    }

    // Task :
    // btn that add two user

    function AddTwo() {
    let arr = [...Data];
    arr.push({ name: "Mahek Shah", email: "mahekshah@gmail.com", color: "bg-blue-900" },
            { name: "Ritika Patel", email: "ritikapatel@gmail.com", color: "bg-blue-900" });
        if (Data.some(user => user.name === "Mahek Shah") || Data.some(user => user.name === "Ritika Patel")) {
            return alert("User Exists !!!");
        }
        setData(arr);
    }

  return (
    <>
      <section className='flex flex-wrap justify-center items-center gap-6 my-10'>
        
        {Data.map((user) => {
            return (
                <div className={`w-full h-auto max-w-sm rounded-xl p-6 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}>
                
                    <h1 className='bg-[#222] w-full rounded-xl px-4 py-2'>
                        {user.name}
                    </h1>
                    
                    <h1 className='bg-[#222] w-full rounded-xl px-4 py-2'>
                        {user.email}
                    </h1>
                
                </div>
            )
        })}

      </section>

      <div className='flex justify-center items-center'>
        <button className='bg-blue-900 text-center px-6 py-4 active:bg-blue-200 active:scale-95 active:bg-blue-900 text-2xl font-bold rounded-xl transition-all'
        onClick={Add}>
            Add One More User
        </button>

        <button className='bg-blue-900 text-center px-6 py-4 active:bg-blue-200 active:scale-95 active:bg-blue-900 text-2xl font-bold rounded-xl ml-10 transition-all'
        onClick={AddTwo}>
            Add Two More User
        </button>

      </div>
    </>
  )
}

export default AddUser

