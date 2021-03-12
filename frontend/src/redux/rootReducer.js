import { combineReducers } from 'redux';
import { videosReducer } from './videos/videos.reducer';

const rootReducer = combineReducers({
    videos: videosReducer,
});

export default rootReducer;