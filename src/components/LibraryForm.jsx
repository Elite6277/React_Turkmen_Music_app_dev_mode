//import React from "react";
////import { playAudio } from "../util";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";
//const LibraryForm = ({
//  name,
//  artist,
//  cover,
//  id,
//  setCurrentSong,
//  songs,
//  audioRef,
//  isPlaying,
//  setSongs,
//  active,
//  currentSong,
//}) => {
//  return (
//    <div>
//      <div className="library__form">
//        <form className="library__search">
//          <input
//            type="text"
//            placeholder="Search music..."
//            className="library__input"
//          />
//          <FontAwesomeIcon
//            className="library__icon"
//            icon={faSearch}
//          ></FontAwesomeIcon>
//        </form>
//        <div className="songs">
//         {
//            songs.map((song ,index) => {
//               return {

//               }
//            })
//         }
//        </div>
//      </div>
//    </div>
//  );
//};

//export default LibraryForm;
//import React, { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSearch } from "@fortawesome/free-solid-svg-icons";

//const LibraryForm = ({
//  songs,
//  setSongs,
//  currentSong,
//  // остальные пропсы
//}) => {
//  const [searchTerm, setSearchTerm] = useState("");

//  const handleSearch = (e) => {
//    const searchText = e.target.value;
//    setSearchTerm(searchText);

//    // Фильтруем песни на основе строки поиска
//    const filteredSongs = songs.filter((song) => {
//      const songTitle = song.name.toLowerCase();
//      const artistName = song.artist.toLowerCase();
//      const searchQuery = searchText.toLowerCase();
//      return (
//        songTitle.includes(searchQuery) || artistName.includes(searchQuery)
//      );
//    });

//    // Обновляем массив песен на основе результатов поиска
//    setSongs(filteredSongs);
//  };

//  return (
//    <div>
//      <div className="library__form">
//        <form className="library__search">
//          <input
//            type="text"
//            placeholder="Search music..."
//            className="library__input"
//            value={searchTerm}
//            onChange={handleSearch}
//          />
//          <FontAwesomeIcon className="library__icon" icon={faSearch} />
//        </form>
//        <div className="songs">
//          {songs.map((song, index) => {
//            // Отображаем песни, отфильтрованные по строке поиска
//            return (
//              <div
//                key={song.id}
//                className={`song ${song.id === currentSong.id ? "active" : ""}`}
//              >
//                {/* Ваш код отображения песни */}
//              </div>
//            );
//          })}
//        </div>
//      </div>
//    </div>
//  );
//};

//export default LibraryForm;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LibrarySong from "./LibrarySong"; // Импортируем компонент отображения песни

const LibraryForm = ({
  songs,
  setSongs,
  currentSong,
  isPlaying,
  audioRef,
  setCurrentSong,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);
  };

  const filteredSongs = songs.filter((song) => {
    const songTitle = song.name.toLowerCase();
    const artistName = song.artist.toLowerCase();
    const searchQuery = searchTerm.toLowerCase();
    return songTitle.includes(searchQuery) || artistName.includes(searchQuery);
  });

  return (
    <div className="form__wrapper">
      <div className="library__form">
        <form className="library__search">
          <input
            type="text"
            placeholder="Gözleg..."
            className="library__input"
            value={searchTerm}
            onChange={handleSearch}
          />
          <FontAwesomeIcon className="library__icon" icon={faSearch} />
        </form>
        <div className="songs">
          {filteredSongs.map((song, index) => (
            <LibrarySong
              key={song.id}
              id={song.id}
              name={song.name}
              artist={song.artist}
              cover={song.cover}
              setCurrentSong={setCurrentSong}
              songs={songs}
              audioRef={audioRef}
              isPlaying={isPlaying}
              setSongs={setSongs}
              active={song.id === currentSong.id}
              currentSong={currentSong}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryForm;
