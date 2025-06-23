import './App.scss';
import PhotoList from './components/PhotoList';



// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      {/* {photos.map((photo, index) => ( // should change index for a real id 
        <PhotoListItem
          key={index}
          id={photo.id}
          urls={photo.urls}
          location={photo.location}
          user={photo.user} 
        />
      ))} */}
      <PhotoList />

    </div>
  );
};

export default App;
