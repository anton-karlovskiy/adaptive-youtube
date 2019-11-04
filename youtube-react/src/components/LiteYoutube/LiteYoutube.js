
// ray test touch <
import React, { useRef, useEffect } from 'react';
import './libs/lite-youtube-embed/lite-youtube-embed.css';

const LiteYoutube = () => {
  const ref = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = './libs/lite-youtube-embed/lite-youtube-embed.js';
    document.body.appendChild(script);

    if (ref.current) {
      ref.current.dataset.videoid = 'ogfYd705cRs';
    }
  }, []);

  return (
    <lite-youtube ref={ref}></lite-youtube>
  );
};

export default LiteYoutube;
// ray test touch >
