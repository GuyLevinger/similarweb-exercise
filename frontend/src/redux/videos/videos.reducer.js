import {AddVideo, RemoveFirstVideo} from './videos.types';

const INITIAL_STATE = {
    videos: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AddVideo:
            const newVideos = [...state.videos];
            newVideos.push(action.value)

            return {
                ...state, videos: newVideos,
            };
            break;
        case RemoveFirstVideo:
            const allVideos = [...state.videos];

            if (allVideos.length === 0 || allVideos[0] !== action.value) {
                return state;
            }
            allVideos.shift();

            return {
                ...state, videos: allVideos,
            };
            break;
        default: return state;
    }
};

export const videosReducer = reducer;