import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      {photos.map((photo, index) => ( // should change index for a real id 
        <PhotoListItem
          key={index}
          id={photo.id}
          urls={photo.urls}
          location={photo.location}
          user={photo.user} 
        />
      ))}

    </div>
  );
};

export default App;
