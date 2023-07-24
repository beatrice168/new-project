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
function deleteMusiq(id){
  fetch(`http://127.0.0.1:5555/music/${id}`,{
    method:"DELETE"
  })
  .then(r=>r.json())
  .then(()=>{
    const updatedMusiq = data.filter((data)=> data.id !== id )
    setData(updatedMusiq)
  })

}

  const musiq = data.map((item,index)=>
  <MusiqAlat key = {index} id = {item.id} image = {item.image} video = {item.video} artist = {item.artist} created_at = {item.created_at} genre = {item.genre} deleteMusiq={deleteMusiq}/>


  )
  return (
    <div>
      {musiq}
    </div>
  )
}
export default MusicList