
// ray test touch <
import React from 'react';

import LiteYoutube from '../LiteYoutube/LiteYoutube';
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

const Video = ({ id }) => {
  if(!id) {
    return null;
  }
  const embedUrl = `${BASE_EMBED_URL}${id}`;
  return (
    <div className='video-container'>
      <div className='video'>
        <iframe
          className='video-player'
          src={embedUrl}
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video' />
      </div>
      
      <LiteYoutube />
    </div>
  );
};

export default Video;
// ray test touch >