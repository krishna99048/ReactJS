import React from 'react'
import { useState } from 'react'
import axios from "axios";


const ApiFetch = () => {
    const [Data1, setData1] = useState([])
    const [Data2, setData2] = useState([])
    const [Data3, setData3] = useState([])


    //Method 1
    function Method1() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((rawdata) => {
                return rawdata.json();
            })
            .then((data) => {
                return setData1(data);
            })
            .catch((e) => {
                console.error(e)
            });
    }
    //Method 2
    let Method2 = async () => {
        let response = await fetch("https://dummyjson.com/products?limit=10");
        try {
            let data = await response.json();
            console.log(data.products);
            return setData2(data.products);
        } catch (error) {
            console.error(error);
        }
    }
    //Method 3
    let Method3 = async () => {
        let response = await axios.get("https://dummyjson.com/recipes?limit=10");
        console.log(response.data.recipes)
        setData3(response.data.recipes);
        //HTTPS Methods :
        //GET ==> receive data only
        //POST ==> send data only
        //PATCH ==> update data
        //PUT ==> update data
        //DELETE ==> delete data
    }
    return (
        <>
            {/* Method 1 */}
            <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 font-bold bg-green-100 '>
                <h1 className='text-center text-3xl'>Method 1 : fetch - then - then - catch</h1>
                <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center gap-4'>
                    {Data1.map((user, id) => {
                        return (
                            <div className='bg-[#333] rounded-md w-90 p-2 text-xl' key={id}>
                                <h1><span className='font-bold '>Name : </span>{user.name}</h1>
                                <h1><span className='font-bold '>Email : </span>{user.email}</h1>
                                <h1><span className='font-bold '>Website : </span>{user.website}</h1>
                            </div>
                        )
                    })}
                </div>
                <button className='w-36 px-4 py-2 text-center text-white bg-green-950 rounded text-xl active:bg-green-500 active:text-green-950 active:scale-95 transition-all' onClick={Method1}>Get Data 1</button>
            </section>
            {/* Method 2 */}
            <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 font-bold bg-blue-100 '>
                <h1 className='text-center text-3xl'>Method 2 : Async - Await - Fetch</h1>
                <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center '>
                    {Data2.map((pro, id) => {
                        return (
                            <div key={id}>
                                <div className="card w-full h-auto max-w-sm bg-white/10 rounded-[10%] p-4 text-white shadow gap-y-2">
                                    <div className="bg-gray-500 text-center rounded-b-[12%] rounded-[10%] overflow-hidden">
                                        <img src={pro.images[0]} alt="" className="w-full object-cover rounded-[10%] max-h-112" />
                                    </div>


                                    <div className="content px-6 flex justify-between items-center py-2">
                                        <div className="details">
                                            <h2 className="text-white text-xl font-bold">{pro.title}</h2>
                                        </div>
                                        <div className="price p-2 border-l-2 border-green-400/20">
                                            <h2 className="text-xl font-bold">{pro.price}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className='w-36 px-4 py-2 text-center text-white bg-green-950 rounded text-xl active:bg-blue-500 active:text-blue-950 active:scale-95 transition-all' onClick={Method2}>Get Data 2</button>
            </section>
            {/* Method 3 */}
            <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 font-bold bg-orange-100 '>
                <h1 className='text-center text-3xl'>Method 3 : Async - Await - Axios</h1>
                <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center gap-4'>
                    {Data3.map((rec ,id)=>{
                        return(
                            <div key={id} className='bg-[#555] w-64 p-2 rounded-xl'>
                                <img src={rec.image} alt="img" className='rounded-xl'/>
                                <div className='text-center bg-[#333] my-1 rounded-xl'>
                                    <h1>{rec.name}</h1>
                                    <h1>{rec.rating} / 5.0</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className='w-36 px-4 py-2 text-center text-white bg-green-950 rounded text-xl active:bg-orange-500 active:text-orange-950 active:scale-95 transition-all' onClick={Method3}>Get Data 3</button>
            </section>
        </>
    )
}


export default ApiFetch



