import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addVideo } from '../../redux/videos/videos.actions';

const AddVideoComponent = (props) => {
    const [url, setUrl] = useState('');

    const onSubmit = (event) => {
        const videoId = url.replace('https://www.youtube.com/watch?v=', '').replace('&t=957s', '');

        props.addVideo(videoId);

        setUrl('');
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                id="videoId"
                type="text"
                value={url}
                onChange={event => setUrl(event.target.value)}
                required
                style={{marginRight: '10px'}}
            />
            <button type="submit">Add</button>
        </form>
    );
};

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        addVideo: (video) => {
            dispatch(addVideo(video))
        },
    };
}

export const AddVideo = connect(mapStateToProps, mapDispatchToProps)(AddVideoComponent);