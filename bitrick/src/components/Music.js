import React, {useState} from 'react'

function Music() {
  const [formData, setFormData] = useState({
    artist:"",
    image:"",
    audio:"",
    genre:""
  })
  function handleChange(event){
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    })
  }
  function handleSubmit(event){
    event.preventDefault()
  const post = {
    method: "POST",
    headers:{
      "content-Type":"application/json",
    },
    body:JSON.stringify(formData),
  } 
  fetch("http://127.0.0.1:5555/music", post)
  .then(r=>r.json())
  .then(data=>setFormData(data))
  .catch(error=>console.log(error))
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type = "text" name= "artist" value={formData.artist} placeholder= "artist" />
          <input onChange={handleChange} type = "text" name= "image" value={formData.image} placeholder= "image" />
          <input onChange={handleChange} type = "text" name= "audio" value={formData.audio} placeholder= "audio" />
          <input onChange={handleChange} type = "text" name= "genre" value={formData.genre} placeholder= "genre" />
          <button className='btn' type= "submit" value="music added" onClick={(e)=>alert(e.target.value)}> add Music</button>
          
      
        
        </form>
    </div>
  )
}
export default Music