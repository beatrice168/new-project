import React from 'react';

function MusiqAlat({ id, image, audio, artist, created_at, genre }) {
  return (
    <div className="alert">
      <img src={image} alt="Album Art" />
      <p> <video controls>
        <source src={audio} type="video/mp4" />
        {/* Your browser does not support the video element. */}
      </video></p>
      <p>artist: {artist}</p>
      <p>{created_at}</p>
      <p>{genre}</p>
    </div>
  );
}

export default MusiqAlat;
