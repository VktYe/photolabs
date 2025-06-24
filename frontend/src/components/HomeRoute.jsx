import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"

const HomeRoute = ({photos, topics, favourites, toggleFavourites}) => {
  console.log("Photos:", photos) // delete
  console.log("Topics:", topics) // delete
  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        favourites={favourites}/>
      <PhotoList 
        photos={photos}
        favourites={favourites}
        toggleFavourites={toggleFavourites}
        />
    </div>
  )
}

export default HomeRoute