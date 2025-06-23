import './App.scss';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopicListItem from './components/TopicListItem';
import TopNavigation from './components/TopNavigationBar';



// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
