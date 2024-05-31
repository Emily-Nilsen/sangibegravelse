import { useRef, useState, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import styles from './CustomAudioPlayer.module.css';

export function PlayButton() {
  return (
    <button
      type="button"
      className="p-1.5 text-white transition-colors duration-300 ease-in-out rounded-full shadow-sm bg-amber-600 hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      <PlayIcon className="w-4 h-4" aria-hidden="true" />
    </button>
  );
}

export function PauseButton() {
  return (
    <button
      type="button"
      className="p-1.5 text-white transition-colors duration-300 ease-in-out rounded-full shadow-sm bg-amber-600 hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      <PauseIcon className="w-4 h-4" aria-hidden="true" />
    </button>
  );
}

export function SimpleCustomPlayer({ audioUrl, onPlay }) {
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

  const togglePlayPause = () => {
    if (!isPlaying && onPlay) {
      onPlay(audioRef.current);
    }
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleLoadedMetadata = () => {
    setDuration(Math.floor(audioRef.current.duration));
  };

  const handleTimeUpdate = () => {
    setCurrentTime(Math.floor(audioRef.current.currentTime));
  };

  const handleSeekChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(audio.currentTime);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const currentPercent = `${(currentTime / duration) * 100}%`;

  return (
    <div className="flex items-center">
      <audio
        ref={audioRef}
        src={audioUrl}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnd}
      ></audio>
      <button onClick={togglePlayPause} className="mr-0 text-sm">
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </button>
    </div>
  );
}
