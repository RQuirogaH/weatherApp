import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import Favs from './Components/Favs/Favs.jsx';
import CityMain from './Components/CityMain/CityMain';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='body'>
        <CityMain />
        <Favs />
      </div>
    </div>
  );
}

export default App;
