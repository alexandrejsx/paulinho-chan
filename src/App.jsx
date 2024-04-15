import './App.css';
import React, { useRef, useState, useEffect } from 'react';
import { IoIosVolumeHigh, IoIosVolumeOff } from 'react-icons/io';
import audioSrc from './assets/anohana.mp3';

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [volume, setVolume] = useState(true);
  const [opacity, setOpcacity] = useState(true);
  const [currentSpanIndex, setCurrentSpanIndex] = useState(0);
  const audioRef = useRef(null);
  const spans = ['Senpai', 'Chan', 'San', 'Kun'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpanIndex((prevIndex) => (prevIndex + 1) % spans.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [spans.length]);

  const handleOverlayClick = () => {
    const audio = audioRef.current;
    audio.play();
    setShowOverlay(false);
    setOpcacity(false);
  };

  const handleVolumeChange = () => {
    const volumeIsOn = !volume;
    setVolume(volumeIsOn);
    audioRef.current.volume = volumeIsOn ? 0.5 : 0;
  };

  return (
    <>
      {showOverlay && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-90 flex justify-center items-center text-white cursor-pointer z-50"
          onClick={handleOverlayClick}
        >
          <p className="text-xl heartbeat text-slate-300 text-center">Clique para exibir</p>
        </div>
      )}
      <main
        className={`h-screen w-screen max-h-screen bg-stone-200 flex justify-center items-center pt-4 ${opacity && 'opacity-20'}`}
      >
        <div className="h-full w-full max-w-2xl flex flex-col justify-between">
          <section className="flex flex-col justify-center items-center">
            <div className="w-full flex justify-end px-4">
              <audio ref={audioRef} src={audioSrc} loop volume={0.5} controls className="hidden" />
              <button onClick={handleVolumeChange}>
                <span className="text-2xl text-red-500">
                  {volume ? <IoIosVolumeHigh /> : <IoIosVolumeOff />}
                </span>
              </button>
            </div>
            <div className="jello-horizontal mt-4">
              <div className="heart"></div>
            </div>
            <p className="tracking-out-expand text-slate-600 text-center text-2xl">Desculpa</p>
            <div className="w-full">
              <div className="heartFloatig">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 800 700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
                </svg>
              </div>
              <div className="heartFloatig">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 800 700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
                </svg>
              </div>
              <div className="heartFloatig">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 800 700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
                </svg>
              </div>
              <div className="heartFloatig">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 800 700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.76 135.93 170.09 228.56 303.31 87.574-132.4 228.56-172.86 228.56-303.31 0-66.24-53.76-120-120-120-48.048 0-89.402 28.37-108.56 69.188-19.161-40.817-60.514-69.188-108.56-69.188z" />
                </svg>
              </div>
              <p className="text-4xl text-center">
                <h1 className="bg-gradient-to-r from-red-400 to-sky-600 inline-block text-transparent bg-clip-text">
                  Paulinho&nbsp;
                </h1>
                <span
                  className={`bg-gradient-to-r from-sky-600 to-sky-400 inline-block text-transparent bg-clip-text puff-in-top ${currentSpanIndex}`}
                  key={currentSpanIndex}
                >
                  {spans[currentSpanIndex]}
                </span>
              </p>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center">
            <img
              src="https://media.tenor.com/6403PzxXHDYAAAAi/cute-anime.gif"
              alt="Anime Gif"
              width="200px"
            />
            <p className="text-slate-600 text-center italic">
              "O primeiro a pedir desculpas é o mais corajoso.
              <p>O primeiro a perdoar é o mais forte.</p>
              <p>E o primeiro a esquecer é o mais feliz."</p>
            </p>
          </section>
          <section className="flex flex-col justify-center items-center">
            <div className="flex justify-between">
              <img
                src="https://media.tenor.com/HnKb6eV2ALsAAAAi/anime.gif"
                alt="Anime Gif"
                width="200px"
              />
              <img
                src="https://media.tenor.com/v84DdQdmes4AAAAi/anime.gif"
                alt="Anime Gif"
                width="200px"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
