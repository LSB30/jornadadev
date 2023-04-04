
import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app-videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="lucas_belato30"
          description= "Brecker o goleiro"
          music="Musica épica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
        />

        <Video
          likes={1400}
          messages={2030}
          shares={320}
          name="lucas_belato7"
          description= "Gato pulando"
          music="Musica Sinistra"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
        />

      </div>
    </div>
  );
}

export default App;
