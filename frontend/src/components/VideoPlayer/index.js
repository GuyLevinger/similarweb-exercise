import React, {useEffect, useRef, useState} from 'react';
import {subscribe} from "../../redux/videos/videos.subscriber";
import store from "../../redux/store";
import { connect } from 'react-redux';
import { removeFirstVideo } from '../../redux/videos/videos.actions';
import YouTube from "react-youtube";

const VideoPlayerComponent = (props) => {
    const [playState, setPlayState] = useState({ isPlaying: false, video: '' });

    const playStateRef = useRef(playState);
    playStateRef.current = playState;

    const setPlayStateRef = useRef(setPlayState);
    setPlayStateRef.current = setPlayState;

    const playVideo = (video) => {
      setPlayState({ isPlaying: true, video: video});
    };

    const onVideoFinished = (video) => {
        props.removeFirstVideo(playStateRef.current.video);
        setPlayStateRef.current({ isPlaying: false, video: playStateRef.video });
        playNextVideo();
    };

    const playNextVideo = () => {
        if (playStateRef.current.isPlaying) {
            return;
        }

        const currentState = store.getState();
        const currentVideos = currentState.videos.videos;

        if (currentVideos.length === 0) {
            return;
        }

        const nextVideo = currentVideos[0];
        playVideo(nextVideo);
    };

    useEffect(() => {
        const unsubscribe = subscribe(() => {
            playNextVideo();
        });

        return () => unsubscribe();
    }, []);

    return (
        <div style={{width: '640px', height: '360px', borderStyle: 'solid'}}>
            { playState.isPlaying &&
                <YouTube
                    videoId={playState.video}
                    opts={{
                        width: '640',
                        height: '360'
                    }}
                    onReady={event => event.target.playVideo()}
                    onStateChange={event => {
                        if (event.data == YouTube.PlayerState.ENDED) {
                            onVideoFinished(playState.video);
                        }
                    }}
                />
            }

        </div>
    );
};

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        removeFirstVideo: (video) => {
            dispatch(removeFirstVideo(video));
        },
    };
}

export const VideoPlayer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayerComponent);