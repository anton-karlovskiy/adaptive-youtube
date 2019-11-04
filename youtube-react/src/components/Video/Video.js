
// ray test touch <
import React from 'react';

import HeavyYoutubeEmbed from './HeavyYoutubeEmbed/HeavyYoutubeEmbed';
import LiteYoutubeEmbed from './LiteYoutubeEmbed/LiteYoutubeEmbed';
import './Video.scss';

const Video = ({ id }) => {
  if(!id) {
    return null;
  }
  return (
    <div className='video-container'>
      <div className='video'>
        {/* <HeavyYoutubeEmbed className='video-player' id={id} /> */}
        <LiteYoutubeEmbed className='video-player' id={id} />
      </div>
    </div>
  );
};

export default Video;
// ray test touch >