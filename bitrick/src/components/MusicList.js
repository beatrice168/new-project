import React, { useEffect, useState } from 'react';
import MusiqAlat from './MusiqAlat';

function MusicList() {
  const [data, setData] = useState([]);
  console.log (data)
useEffect(() => {
  fetch("http://127.0.0.1:5555/music")
    .then(r => r.json())
    .then(data=> setData(data));
}, []);
  const musiq = data.map((item,index)=>
  <MusiqAlat key = {index} id = {item.id} artist = {item.artist}  image = {item.image} genre = {item.genre} audio = {item.audio} created_at = {item.created_at}/>

  )
  return (
    <div>
      {musiq}
    </div>
  )
}
export default MusicList