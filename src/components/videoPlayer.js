import React, { useState } from 'react'
import "../css/videoPlayer.css"
const VideoPlayer = (props) => {
    
    const [connectionString, SetConnectionString] = useState("")
    const name = props.name;
    console.log("this is name",name)
    console.log(`http://localhost:4000/api/v1/videos/${name}/stream`)
  return (
    <>
        <div className="videoplayer-container">
            <video onPlay={console.log("video has been played")} className='video-main' controls>
                {name != undefined &&   <source src={`http://10.0.0.234:4000/api/v1/videos/${name}/stream`} type="video/mp4"/> }
              
            </video>
        </div>
    </>
  )
}

export default VideoPlayer