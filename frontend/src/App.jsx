import './App.scss';
import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';



// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      <TopicListItem />
      <PhotoList />

    </div>
  );
};

export default App;
