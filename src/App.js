import StudentList from "./components/StudentList";
import "./index.css"
import ContextProvider from "./Contextprovider";
import StudentApp from "./components/StudentApp";
import FavouriteApp from "./components/FavouriteApp";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center">

      <ContextProvider>
      <BrowserRouter>
      
      <div className=" w-full ">
      <Navbar />
      <div className="p-4">
      <Routes>
      <Route path="/" element={<StudentApp />}></Route>
      <Route path="favourites" element={<FavouriteApp />}></Route>
      </Routes>
      </div>
      </div>
      </BrowserRouter>
      </ContextProvider>
    </div>

  )
}

export default App;
