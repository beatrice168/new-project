import React from 'react'

function MusiqAlat({ id,image,audio,artist,created_at,genre}) {

  return (
    <div>
        <p>{image}</p>
        <p>{audio}</p>
        <p>{artist}</p>
        <p>{created_at}</p>
        <p>{genre}</p>
       
    </div>
  )
}
export default MusiqAlat