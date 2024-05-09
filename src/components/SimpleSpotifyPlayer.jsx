import { MiniSpotifyPlayer } from './MiniSpotifyPlayer';
import { getPerformerLink } from '../../utilities/getPerformerLink';
import Link from 'next/link';

export function SimpleSpotifyPlayer({ spotify, spotifyUrl }) {
  return (
    <div className="p-0 px-0 pt-0 pb-0 mt-0 bg-white border-none shadow-none rounded-xl">
      {spotify && <MiniSpotifyPlayer spotifyUrl={spotifyUrl} />}
    </div>
  );
}
