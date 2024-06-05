import { useRef, useState, useEffect } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import styles from './CustomAudioPlayer.module.css';

export function PlayButton() {
  return <PlayIcon className="w-4 h-4" aria-hidden="true" />;
}

export function PauseButton() {
  return <PauseIcon className="w-4 h-4" aria-hidden="true" />;
}

export function ForslagSimplePlayer({ audioUrl, onPlay }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

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

  return (
    <div className="flex items-center">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      <button
        onClick={togglePlayPause}
        className="p-1.5 text-gray-800 transition-colors duration-300 ease-in-out rounded-full shadow-sm bg-white/70 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
      >
        {isPlaying ? <PauseButton /> : <PlayButton />}
      </button>
    </div>
  );
}
