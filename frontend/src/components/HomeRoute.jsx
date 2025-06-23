import PhotoList from "./PhotoList"
import TopNavigation from "./TopNavigationBar"

const HomeRoute = ({photos, topics}) => {
  console.log("Photos:", photos);
  console.log("Topics:", topics)
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
    </div>
  )
}

export default HomeRoute