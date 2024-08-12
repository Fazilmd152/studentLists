import { useContext } from "react"
import { StudentContext } from "../Contextprovider"

function RemoveButton(props) {
    const { favList, setFavList } = useContext(StudentContext)
    const { studentList, setStudentList } = useContext(StudentContext)

    console.log(props.id);

    function remove(id) {

        var tempArr = favList.filter((i) => {
            if (i.id === id) {
                return false

            }
            else {
                return true
            }
        })

        setFavList(tempArr)

        studentList.forEach(el => {
            if (el.id === props.id) {
                el.fav = false
            }
        });


    }


    return (
        <div className="text-xs p-1 bg-red-500 rounded-md text-white">
            <button onClick={() => { remove(props.id) }}>Remove</button>
        </div>
    )
}

export default RemoveButton