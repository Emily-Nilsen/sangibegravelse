import { useRef, useState, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import styles from './CustomAudioPlayer.module.css';

export function PlayButton() {
  return (
    <button
      type="button"
      className="p-2 text-white transition-colors duration-300 ease-in-out rounded-full shadow-sm bg-amber-600 hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      <PlayIcon className="w-5 h-5 ml-0.5 -mr-0.5" aria-hidden="true" />
    </button>
  );
}

export function PauseButton() {
  return (
    <button
      type="button"
      className="p-2 text-white transition-colors duration-300 ease-in-out rounded-full shadow-sm bg-amber-600 hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      <PauseIcon className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}

export function CustomAudioPlayer({ audioUrl }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleLoadedMetadata = () => {
      setDuration(Math.floor(audio.duration));
    };
    const handleTimeUpdate = () => {
      setCurrentTime(Math.floor(audio.currentTime));
    };
    const handleAudioEnd = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleAudioEnd);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleSeekChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(audio.currentTime);
  };

  const currentPercent = `${(currentTime / duration) * 100}%`;

  return (
    <div className="flex items-center">
      <audio ref={audioRef} src={audioUrl} className="hidden" />
      <div onClick={togglePlayPause} className="mr-4 text-lg">
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </div>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeekChange}
        className={`${styles.audioInput}`}
        style={{
          '--currentPercent': currentPercent,
        }}
      />
      <div className="flex ml-4 text-sm text-gray-700">
        <span>
          {new Date(currentTime * 1000).toISOString().substring(14, 19)}
        </span>
        <span className="mx-1">/</span>
        <span>{new Date(duration * 1000).toISOString().substring(14, 19)}</span>
      </div>
    </div>
  );
}
