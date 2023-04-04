import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import "./videoSideBar.css"


function VideoSideBar({ likes, messages, shares }) {
  const [liked, setliked] = useState(false)

  function handdlelike() {
    setliked(!liked)
  }



  return (
    <div className="video-sidebar">
      <div
        className='sidebar-options'
        onClick={handdlelike}
      >
        {liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='sidebar-options'>
        <p><ChatIcon fontSize='large' /></p>
        <p>{messages}</p>
      </div>
      <div className='sidebar-options'>
        <p><ShareIcon fontSize='large' /></p>
        <p>{shares}</p>
      </div>

    </div>
  )
}

export default VideoSideBar