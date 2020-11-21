import React from 'react';
import './inspired.css';

const AdvancedVideos = () => {
  return (
    <div>
      <h1 className='videos_header'>Advanced Workout Videos</h1>
      <div className='workout_videos'>
        <iframe
          width='350'
          height='300'
          src='https://www.youtube.com/embed/srj94JCeuWw'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video1'
        ></iframe>
        <iframe
          width='350'
          height='300'
          src='https://www.youtube.com/embed/zXSo4EJG5FU'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video2'
        ></iframe>
        <iframe
          width='350'
          height='300'
          src='https://www.youtube.com/embed/hXZ36ru17fc'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video3'
        ></iframe>
      </div>
    </div>
  );
};

export default AdvancedVideos;
