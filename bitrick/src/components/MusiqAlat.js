import React from 'react';

function MusiqAlat({ id, image, video, artist, created_at, genre, deleteMusiq }) {
  return (
    <div className="alert">
      {/* <img src={image} alt="Music Image" /> */}
      <div className="youtube">
        <iframe
          title="YouTube Video"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* < img src='https://i.pinimg.com/236x/37/85/26/3785260c5f9ace47178ce7b95ed8cff9.jpg' /> */}
      </div>
      {/* <p>Artist: {artist}</p> */}
      <p>Added At: {created_at}</p>
      {/* <p>Genre: {genre}</p> */}
      <button onClick = {()=> deleteMusiq(id)}>delete</button>
    </div>
  );
}

export default MusiqAlat;
