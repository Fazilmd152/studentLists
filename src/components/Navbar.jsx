import React, { useState } from "react"
import { Link } from "react-router-dom"

function Navbar(){
const [nav,setNav]=useState(true)

function handleNav(){setNav(false)}
function handleNav2(){setNav(true)}

return(
    <div className="bg-[#ffc107] text-black flex justify-between items-center p-2 delay-75 place-content-end">
        
        {nav?<h1 className="text-2xl col-span-2 ">Student Lists</h1>:<h1 className="text-2xl">Favourite Students Lists</h1> } 
        
        
       
          
          
       {
          nav?<h1 className="hover:underline  text-right " onClick={handleNav}><Link to={'favourites'}>Favourites</Link></h1>:<h1 className="hover:underline " onClick={handleNav2}><Link to={'/'}>Student Lists</Link></h1>
       }
            
           
            
        
    </div>
)
}


export default Navbar