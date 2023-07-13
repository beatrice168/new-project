import React, { useEffect, useState } from 'react';

function MusicList() {
  const [data,setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5555/music")
      .then(r => r.json())
      .then(data=> {setData(data)});
  }, []);
  return (
    <div></div>
  )
}
export default MusicList