import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from './config/fireBase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {


  const [video, setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapShot = await getDocs(videosCollection);
    const videoList = videosSnapShot.docs.map(doc => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, [])


  return (
    <div className="App" >
      <div className="app-videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
