import React from 'react';
import {AddVideo} from "../../components/AddVideo";
import {VideosList} from "../../components/VideosList";
import {VideoPlayer} from "../../components/VideoPlayer";

export const MainPlayer = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{flexDirection: 'column', borderStyle: 'solid', marginRight: '20px', padding: '10px'}}>
                <AddVideo/>
                <VideosList/>
            </div>
            <div>
                <VideoPlayer/>
            </div>
        </div>
    );
};