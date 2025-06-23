import './App.scss';
import HomeRoute from './components/HomeRoute';




// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(3).fill(sampleDataForPhotoListItem);

  return (
    <div className="App">
      <HomeRoute />
    </div>
  );
};

export default App;
