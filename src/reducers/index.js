import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05'},
        { title: 'macarena', duration: '2:30'},
        { title: 'scrubs', duration: '3:15'},
        { title: 'i want it', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

// export default now any other file in the project can get accesss to the combined reducers
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
