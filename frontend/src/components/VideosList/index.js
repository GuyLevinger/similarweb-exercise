import React, {useEffect, useState} from 'react';
import {subscribe} from "../../redux/videos/videos.subscriber";
import store from "../../redux/store";

export const VideosList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const unsubscribe = subscribe(() => {
            const currentState = store.getState();
            const currentVideos = currentState.videos.videos;
            setVideos(currentVideos);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div style={{borderStyle: 'solid', height: '290px', marginTop: '10px'}}>
            {videos.map((item, index) => (
                <div key={index.toString()}>{item}</div>
            ))}
        </div>
    );
};