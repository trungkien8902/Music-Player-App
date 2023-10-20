import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { Songs } from "./context";
import DataSongs from "./data/songs.json";

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
  const song = DataSongs.find((song) => song.id === idSong);
  setSong(song);
  };

  return (
    <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </Songs.Provider>
  );
}

export default App;
