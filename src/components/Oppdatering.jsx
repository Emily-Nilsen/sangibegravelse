import Link from 'next/link';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

export function Oppdatering() {
  return (
    <div className="">
      <div className="p-4 rounded-md sm:px-8 bg-amber-50">
        <div className="flex mx-auto">
          <div className="flex-shrink-0">
            <InformationCircleIcon
              className="w-5 h-5 text-amber-400"
              aria-hidden="true"
            />
          </div>
          <div className="flex-1 ml-3 md:flex md:justify-between">
            <p className="text-sm text-amber-700">
              Siden er under løpende oppdatering.
            </p>
            <p className="mt-3 text-sm md:ml-6 md:mt-0">
              <Link
                href="/"
                className="font-medium transition-all duration-150 ease-in-out text-amber-700 whitespace-nowrap hover:text-amber-600"
              >
                Se vår repertoarliste
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
