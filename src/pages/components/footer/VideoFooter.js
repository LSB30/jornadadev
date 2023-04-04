import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name,description,music}) {
  return (
    <div className="video-footer">
      <div className='footer-text'>
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className='footer-music'>
          <p><MusicNoteIcon className="footer-record-icon" /></p>
          <div className='footer-title'>
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="footer-record"
        alt="imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  )
}

export default VideoFooter