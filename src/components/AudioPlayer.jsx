import { CustomAudioPlayer } from './CustomAudioPlayer';
import { getPerformerLink } from '../../utilities/getPerformerLink';
import Link from 'next/link';

export function AudioPlayer({ audio, audioUrl, title, performers, live }) {
  return (
    <div className="p-4 bg-white border shadow-lg rounded-xl sm:px-0 sm:pt-0 sm:pb-0 sm:mt-0 sm:border-none border-amber-600/20 shadow-gray-300/30 sm:shadow-none">
      {audio && <CustomAudioPlayer audioUrl={audioUrl} />}

      {Array.isArray(performers) && performers.length > 0 && (
        <p className="max-w-lg pt-4 text-sm leading-7 text-slate-700 sm:text-amber-700">
          Solo:{' '}
          <span>
            {performers.reduce((acc, performer, i, arr) => {
              const link = getPerformerLink(performer);
              if (i === 0)
                return (
                  <Link
                    href={link}
                    className="font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:text-slate-800"
                  >
                    {performer}
                  </Link>
                );
              if (i === arr.length - 1)
                return (
                  <>
                    {acc} og{' '}
                    <Link
                      href={link}
                      className="font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:text-slate-800"
                    >
                      {performer}
                    </Link>
                  </>
                );
              return (
                <>
                  {acc},{' '}
                  <Link
                    href={link}
                    className="font-semibold transition-all duration-300 ease-in-out cursor-pointer hover:text-slate-800"
                  >
                    {performer}
                  </Link>
                </>
              );
            }, '')}
          </span>
          {live && (
            <span className="sm:text-amber-700 text-slate-700">
              {' '}
              (liveopptak)
            </span>
          )}
        </p>
      )}
    </div>
  );
}
