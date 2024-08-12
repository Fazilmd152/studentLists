import { useContext } from "react"
import { StudentContext } from "../Contextprovider";
import FavButton from "./FavButton";



function StudentList(){
    const {studentList,setStudentList}=useContext(StudentContext) 
  
    
    return(
      
       studentList.map((i,index)=>{
         return <div key={index} className="border rounded-md mb-1 bg-green-200 flex justify-between items-center w-full p-1">
         <h1 className="m-1 ">{index+1}. {i.name}</h1>
         <FavButton value={i.name} fav={i.fav} set={i} />
         </div>
       })
      
      

    )
}

export default StudentList