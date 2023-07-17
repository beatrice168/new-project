import React from 'react';

function MusiqAlat({ id, image, video, artist, created_at, genre }) {
  return (
    <div className="alert">
      <img src={image} alt="Music Image" />
      <div className="youtube-video">
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p>Artist: {artist}</p>
      <p>Added At: {created_at}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default MusiqAlat;
