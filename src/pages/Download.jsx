import React from 'react'
import {  useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Cart from '../Component/Cart'
import { saveAs } from 'file-saver'
const Download = () => {
  const location=useLocation()
  const {image ,tags}=location.state || {};
  const rtags =  tags.replace(/[, ]+/g, '+')
  const [item ,setItem]=useState([])

  console.log((rtags))
  const Api_call= async()=>{
    const response=await axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${rtags}&image_type=photo&orientation=horizontal&per_page=50&safeSearch=true`)
    setItem(response.data.hits)
}
useEffect(()=>{
    Api_call()
},[])

const downloa_image=()=>{
  saveAs(image,"wallify.jpg")
}
  return (
    <>
    <Navbar/>
    <div className="mt-14 flex flex-col items-center h-auto w-full md:w-1/3 bg-slate-100 rounded-lg shadow-lg p-6   md:place-self-center space-y-6">
  {/* <!-- Image Section --> */}
  <img 
    src={image} 
    alt="Product Image" 
    className="w-full rounded-md object-cover shadow-gray-400  shadow-md " 
  />

  {/* <!-- Button Section --> */}
  <button  onClick={downloa_image}
    className="w-full px-6 py-3  border  bg-transparent border-green-400 text-black text-xl rounded-md shadow-md hover:bg-lime-600 hover:shadow-lg transition-all duration-300"
  >
    Download
  </button>
</div>

<h1 className=' ml-24 mt-16 font-poppins font-bold text-2xl'>Related free images </h1>
<div className=" pt-10  min-h-screen w-full bg-slate-200 md:flex flex-wrap">
{
  item.map((e,ids)=>{
    return <Cart key={ids} image={e.largeImageURL} tags={e.tags} />
  })

}
</div>

    </>
  )
}

export default Download