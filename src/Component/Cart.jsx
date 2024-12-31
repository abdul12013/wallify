import React from 'react'
import image from  '../assets/react.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from "react-router-dom"
function  Cart(props) {
   
  const navigate=useNavigate()
  const dow=()=>{
    navigate('/download', {state:{image:props.image,tags:props.tags}})
  }
  return (
    <>
    
  <div className="rounded-lg overflow-hidden shadow-slate-500 shadow-lg h-auto w-72  mt-10 ml-7">
   
   <img onClick={dow} src={props.image}  alt="Image 1" className="h-full w-auto object-cover cursor-pointer" />
  </div>

 


  




    </>
  )
}

export default  Cart
