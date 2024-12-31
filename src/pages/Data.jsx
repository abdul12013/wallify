import React from 'react'
import {  useEffect, useState } from "react"
import axios from "axios"
import Navbar from '../Component/Navbar'
import { useLocation } from 'react-router-dom'
import Cart from '../Component/Cart'
import Search from '../Component/Search'
const Data = () => {
    const location=useLocation()
    const query=location.state

    const [item ,setItem]=useState([])


  const Api_call= async()=>{
    const response=await axios.get(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${location.state}&image_type=photo&orientation=horizontal&per_page=50`)
    console.log(response.data.hits)
    setItem(response.data.hits)
}
useEffect(()=>{
    Api_call()
},[])

useEffect(() => {
    if (query) {
      Api_call(query);
    }
  }, [query]);
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

export default Data