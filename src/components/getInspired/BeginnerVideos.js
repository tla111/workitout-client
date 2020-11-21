import React from 'react';
import './inspired.css';

const BeginnerVideos = () => {
  return (
    <div>
      <h1 className='videos_header'>Beginner Workout Videos</h1>
      <div className='workout_videos'>
        <iframe
          width='375'
          height='300'
          src='https://www.youtube.com/embed/3p8EBPVZ2Iw'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video1'
        ></iframe>
        <iframe
          width='350'
          height='300'
          src='https://www.youtube.com/embed/Oe5CDt3dp8Q'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video2'
        ></iframe>
        <iframe
          width='350'
          height='300'
          src='https://www.youtube.com/embed/H9vwqwN69rU'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video3'
        ></iframe>
      </div>
    </div>
  );
};

export default BeginnerVideos;
