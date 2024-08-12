import { useContext } from "react"
import { StudentContext } from "../Contextprovider"
import RemoveButton from "./RemoveButton";

function FavoriteList(){

const {favList,setFavList}=useContext(StudentContext)
console.log(favList);

    return(
       
       favList.map((i,index)=>{
        return <div className="flex justify-between items-center w-full">
            <h1 className="m-1">{index+1}. {i.name}</h1>
            <RemoveButton id={i.id}/>
        </div>
      })
      
        
    
       
    )

    
}

export default FavoriteList