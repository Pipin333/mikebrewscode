import { useEffect, useRef, useState } from "react";
import { setlist } from "../utils/setlist";

export default function Player({ onSectionChange, section }) {
  const iframeRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(Math.floor(Math.random() * setlist.length));
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(100);

  // Prevent same track repeating in loop
  const shuffleTrack = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * setlist.length);
    } while (nextIndex === trackIndex);
    setTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % setlist.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setTrackIndex((prev) => (prev - 1 + setlist.length) % setlist.length);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  // We reload iframe by changing key
  const getIframeKey = () => `${trackIndex}-${isPlaying}`;

  const setVolumeLevel = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="absolute bottom-4 right-4 bg-neutral-900 bg-opacity-80 backdrop-blur-md p-4 rounded-xl shadow-xl flex flex-col items-end text-sm w-80 space-y-2">
      <div className="text-white font-semibold">
        🎵 {setlist[trackIndex].title} — {setlist[trackIndex].artist}
      </div>

      <div className="flex gap-2 items-center">
        <button onClick={prevTrack} className="text-white hover:text-green-400">⏮️</button>
        <button onClick={togglePlay} className="text-white hover:text-green-400">
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button onClick={nextTrack} className="text-white hover:text-green-400">⏭️</button>
        <button onClick={shuffleTrack} className="text-white hover:text-green-400">🔀</button>
      </div>

      <div className="flex items-center gap-2 w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={setVolumeLevel}
          className="w-full"
        />
        <span className="text-white text-xs">{volume}%</span>
      </div>

      <div className="w-full">
        <select
          onChange={(e) => onSectionChange(e.target.value)}
          value={section}
          className="bg-black border border-green-500 text-white px-2 py-1 rounded-md w-full mt-1"
        >
          <option value="about">About</option>
          <option value="toodles">Toodles</option>
          <option value="projects">Proyectos</option>
          <option value="contact">Contacto</option>
        </select>
      </div>

      {isPlaying && (
        <iframe
          key={getIframeKey()}
          ref={iframeRef}
          width="0"
          height="0"
          src={`${setlist[trackIndex].url}?autoplay=1&controls=0`}
          allow="autoplay"
          title="Toodles Audio"
        ></iframe>
      )}
    </div>
  );
}