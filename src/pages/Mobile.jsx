import React from 'react'
import {  useEffect, useState } from "react"
import Navbar from '../Component/Navbar'
import Cart from "../Component/Cart"
import axios from "axios"
import Search from "../Component/Search"
const mobile = () => {
    const [item,setItem]=useState([])
    const [loading,setLoading]=useState(false)
    const Api_call= async()=>{
      const randomPage = Math.floor(Math.random() * 10) + 1
      const totalPages = Math.ceil(item.totalHits / 300);
      const response = await axios.get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_API_KEY
        }&image_type=photo&orientation=horizontal&per_page=${totalPages}&safeSearch=true&page=${randomPage} `
      );
     
        setItem(response.data.hits)
    }
    useEffect(()=>{
        Api_call()
        
    },[])
  return (
    <>
      
      
    <Navbar/>
    
   
    <Search/>
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

export default mobile
