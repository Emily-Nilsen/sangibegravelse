import { SimpleCustomPlayer } from './SimpleCustomPlayer';
import { getPerformerLink } from '../../utilities/getPerformerLink';
import Link from 'next/link';

export function SimplePlayer({
  audio,
  audioUrl,
  title,
  performers,
  live,
  onPlay,
}) {
  return (
    <div className="p-0 px-0 pt-0 pb-0 mt-0 bg-white border-none shadow-none rounded-xl">
      {audio && <SimpleCustomPlayer audioUrl={audioUrl} onPlay={onPlay} />}
    </div>
  );
}
