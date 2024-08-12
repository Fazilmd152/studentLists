import React from 'react'
import FavoriteList from './FavouriteList'

const FavouriteApp = () => {
  return (
    <div className="p-5 flex flex-col items-center mt-5 border flex-grow">
        <h1 className="text-blue-800 text-2xl 
            ">Favourite List</h1>
        <FavoriteList/>
    </div>
  )
}

export default FavouriteApp