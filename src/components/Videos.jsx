import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { YoutubeVideo } from './YoutubeVideo';
import Link from 'next/link';

export function Videos({ children }) {
  return (
    <div className="grid grid-cols-1 gap-12 mb-12 not-prose sm:grid-cols-2">
      {children}
    </div>
  );
}

export function Video({ title, description, href }) {
  return (
    <div className="flex flex-col items-start w-full h-full pt-5 text-left">
      <div className="relative object-cover w-full aspect-video rounded-2xl">
        <YoutubeVideo publicId={href} />
      </div>
      <div className="flex flex-col justify-start w-full h-full">
        <h3 className="mt-1 text-base font-semibold leading-8 tracking-tight text-gray-900 dark:text-white sm:mt-2">
          {title}
        </h3>
        <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
