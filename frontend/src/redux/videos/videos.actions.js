import { AddVideo, RemoveFirstVideo } from './videos.types';

export const addVideo = (video) => {
    return {
        type: AddVideo,
        value: video,
    };
};

export const removeFirstVideo = (video) => {
    return {
        type: RemoveFirstVideo,
        value: video,
    };
};