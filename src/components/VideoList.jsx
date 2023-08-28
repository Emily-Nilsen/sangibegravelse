import Image from 'next/image';
import Link from 'next/link';
import { Videos } from './Videos';
import { Video } from './Videos';

const videos = [
  {
    href: 'https://www.youtube.com/watch?v=atdbe9jFw2g',
    title: 'Kjærlighet',
    description:
      'Susanne Hvinden Hals synger «Kjærlighet», komponert av Arne Tofte og Vladimir Cosma.',
  },
  {
    href: 'https://www.youtube.com/watch?v=cIEWg-XSqAI',
    title: 'Ach, ich fühl’s',
    description:
      'Susanne Hvinden Hals synger «Ach, ich fühl’s», komponert av Wolfgang Amadeus Mozart.',
  },
];

export function VideoList() {
  return (
    <div id="videoer" className="py-32 bg-white">
      <div className="px-6 mx-auto text-left max-w-7xl lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Videoer
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Under følger eksempler fra reportoaret fremført av våre musikere.
          </p>
        </div>
        {/* <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto mt-20 text-left gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        > */}
        <div className="mt-10">
          <Videos>
            {videos.map((video) => (
              <Video
                key={video.href}
                href={video.href}
                title={video.title}
                description={video.description}
              />
            ))}
          </Videos>
        </div>

        {/* </ul> */}
      </div>
    </div>
  );
}
