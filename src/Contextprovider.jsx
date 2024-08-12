import { createContext, useState } from "react"



const StudentContext = createContext()

function ContextProvider(data) {

    const [studentList, setStudentList] = useState([
        { id: 1, name: "Fazil", fav: false },
        { id: 2, name: "Fayas", fav: false },
        { id: 3, name: "Akram", fav: false },
        { id: 4, name: "Nihal", fav: false }])

    const [favList, setFavList] = useState([])





    return (
        <StudentContext.Provider value={{ studentList, setStudentList, favList, setFavList }}>
            {data.children}
        </StudentContext.Provider>
    )
}

export default ContextProvider
export { StudentContext }