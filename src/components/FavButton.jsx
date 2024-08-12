import React, { useContext, useState } from 'react'
import { StudentContext } from '../Contextprovider'




const FavButton = (props, { set }) => {
  const { studentList } = useContext(StudentContext)
  const { favList, setFavList } = useContext(StudentContext)









  function handleFav() {

    if (!props.fav) {

      setFavList([...favList, { id: props.set.id, name: props.value, fav:true }])
      props.set.fav = true
    }
  }


  return (
    <div >
     
      {
        props.fav ? (<span className='text-xs text-[#ffffff] font-medium rounded-md bg-[#256019] p-1'><i class="fa-solid fa-check" style={{'color': 'white'}}></i> Added To Favourites</span>) : (<button onClick={() => {
          handleFav()
        }}className='text-xs bg-black rounded-md text-white p-1 font-medium' >Add to Favourites</button>)
      }
    </div>

  )



}

export default FavButton

