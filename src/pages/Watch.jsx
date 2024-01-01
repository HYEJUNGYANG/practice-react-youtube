import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import YouTube from 'react-youtube';

export default function Watch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('v');
  console.log(query);
  const opts = {
    width: 1280,
    height: 720,
    playerVars: {
      //   autoplay: 1,
      //   mute: 1
    }
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };

  useEffect(() => {
    if (!query) {
      navigate('/', { replace: true });
      return;
    }
  }, [query]);

  return (
    <div className="w-full h-full">
      <div className="w-11/12 mx-auto my-7">
        <div className="w-fit overflow-hidden rounded-xl">
          <YouTube videoId={query} opts={opts} onReady={onReady} />
        </div>
      </div>
    </div>
  );
}
