import Navbar from './components/Navbar';
import Home from './components/Home';
import Music from './components/Music';
import MusicList from './components/MusicList';
import {Routes, Route} from "react-router-dom"

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route path = "/music" element = {<Music/>} />
          <Route path = "/musiclist" element = {<MusicList/>} />
        </Routes>
    </div>
  );
}

export default App;
