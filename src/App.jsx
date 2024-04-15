import './App.css';
import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <main className="h-screen w-screen bg-stone-200 pt-12">
      <div style={{ display: 'none' }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=4QDEWNg5hAM"
          playing={true}
          loop={true}
          volume={0.5}
          width={0}
          height={0}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div></div>
        <div className="jello-horizontal">
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
          <img src=" https://media.tenor.com/HnKb6eV2ALsAAAAi/anime.gif" alt="Anime Gif" />
          <img src="https://media.tenor.com/v84DdQdmes4AAAAi/anime.gif" alt="Anime Gif" />
        </div>
      </div>
    </main>
  );
}

export default App;
