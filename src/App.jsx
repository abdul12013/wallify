

import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Download from "./pages/Download"
import Data from "./pages/Data"
import Anime from "./pages/Anime"
import Nature from "./pages/Nature"
import Mobile from "./pages/Mobile"


const App= ()=>{
    

   
  return (
   
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/download' element={<Download/>}/>
   <Route path="/data" element={<Data/>}/>
   <Route path='/anime' element={<Anime/>}/>
   <Route path="/nature" element={<Nature/>}/>
   <Route path="/mobile" element={<Mobile/>}/>
  </Routes>
     
  

  )
}

 
 



export default App
