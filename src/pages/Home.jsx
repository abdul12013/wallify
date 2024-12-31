
import {  useEffect, useState } from "react"
import Navbar from '../Component/Navbar'
import Cart from "../Component/Cart"
import axios from "axios"
import Search from "../Component/Search"
import { TailSpin } from "react-loader-spinner"



  
 

  
 
 

  
 
 
 

const home = () => {
    
  const [item,setItem]=useState([])
  const [loading,setLoading]=useState(false)

 
  const Api_call= async()=>{
    const randomPage = Math.floor(Math.random() * 10) + 1; // Random page between 1 and 50
    setLoading(true)
    
    try{
      
      const response = await axios.get(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_API_KEY
        }&image_type=photo&orientation=horizontal&per_page=50&page=${randomPage}&safeSearch=true`
      );
      
     
      setItem(response.data.hits)
    }
    catch(e){
      console.log(e.message)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    Api_call()
    
},[])
 

  console.log(`length ${item.length}`)
  return (
    <>
      
      
    <Navbar/>
    
    
     
    
    <Search/>
   <div className=" pt-10  min-h-screen w-full bg-slate-200 md:flex ">

    { 
    
        item.map((e,ids)=>{
           
            return <Cart key={ids} image={e.largeImageURL} tags={e.tags}
           />
        })
    }
   </div>
   
    
    </>
  )
}

export default home