import StudentList from "./StudentList";

function StudentApp() {
    return (
        <div className="p-5 flex flex-col items-center mt-5 border flex-grow">
            <h1 className="text-blue-800 text-2xl 
            ">Student Lists</h1>

            <StudentList />
        </div>

    )
}


export default StudentApp