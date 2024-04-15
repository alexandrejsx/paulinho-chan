import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  return (
    <main className="h-screen w-screen bg-stone-200 pt-4">
      <audio
        ref={audioRef}
        src="../anohana.mp3"
        loop
        autoPlay
        volume={volume}
        style={{ display: 'none' }}
      />
      <div className="flex flex-col justify-center items-center">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="h-4 w-32 bg-neutral-500 rounded-full appearance-none"
        />
        <div className="jello-horizontal mt-4">
          <div className="heart"></div>
        </div>
        <p className="tracking-out-expand text-slate-500 text-center text-2xl">Desculpa</p>
        <p className="text-shadow-pop-left text-red-500 text-center text-7xl">Paulinho Senpai</p>
        <img src="https://media.tenor.com/6403PzxXHDYAAAAi/cute-anime.gif" alt="Anime Gif" />
        <p className="text-center italic">
          "O primeiro a pedir desculpas é o mais corajoso.{' '}
          <p>O primeiro a perdoar é o mais forte.</p>{' '}
          <p>E o primeiro a esquecer é o mais feliz."</p>
        </p>
        <div className="flex justify-between">
          <img src="https://media.tenor.com/HnKb6eV2ALsAAAAi/anime.gif" alt="Anime Gif" />
          <img src="https://media.tenor.com/v84DdQdmes4AAAAi/anime.gif" alt="Anime Gif" />
        </div>
      </div>
    </main>
  );
}

export default App;
