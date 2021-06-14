import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
    return (
        <div className='item video-item'>
            <img
                src={video.thumbnails.medium.url}
                alt={video.title}
                className='ui image'
            />
            <div className='content'>
                <div className='header'>{video.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
