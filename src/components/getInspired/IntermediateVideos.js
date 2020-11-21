import React from 'react';
import './inspired.css';

const IntermediateVideos = () => {
  return (
    <div>
      <h1 className='videos_header'>Intermediate Workout Videos</h1>
      <div className='workout_videos'>
        <iframe
          width='350'
          height='300'
          src='https://www.youtube.com/embed/8J2pCRDTK9o'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video1'
        ></iframe>
        <iframe
          width='350'
          height='300'
          src='https://www.youtube.com/embed/Rd3XHPk5me4'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video2'
        ></iframe>
        <iframe
          width='350'
          height='300'
          src='https://www.youtube.com/embed/jwkEhVWZg-4'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='video3'
        ></iframe>
      </div>
    </div>
  );
};

export default IntermediateVideos;
