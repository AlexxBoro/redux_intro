import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "I dont know", duration: "4:05" },
    { title: "Another title", duration: "3:00" },
    { title: "Bla bla Bal", duration: "2:45" },
    { title: "ABC", duration: "1:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
