import React, { useState } from "react"
const Form=()=>{
    const [user, setuser]=useState("")
    const submit_handler=(e)=>{
        e.preventDefault()
        console.log("kuch nhi sab ,mast")
        setuser("")
    }
      


    return(
        <form  onSubmit={(e)=>{
            submit_handler(e)
        }}>
  <input value={user} onChange={(e)=>{
    console.log(e.target.value)
    setuser(e.target.value)
  }}  className="flex  place-self-center h-16 w-64 mt-36 outline-none border border-teal-400 rounded-md text-center" type="text" placeholder="Enter your name here" />
  <button className=" flex place-self-center h-11 w-32  border border-rose-700 rounded-xl bg-transparent text-black px-4  pl-8 py-2 mt-24  transform hover:scale-110 transition">Submit</button>
</form>

    )

}

export default Form