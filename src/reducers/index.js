import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:15" },
    { title: "All Star", duration: "3:25" },
    { title: "I Want it That Way", duration: "2:05" },
  ];
};

const SelectedSongReducer = (SelectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return SelectedSong;
};

export default combineReducers({
  songs: songsReducer,
  SelectedSong: SelectedSongReducer,
});
