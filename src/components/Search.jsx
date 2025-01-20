import { useState } from 'react';
import { AlgoliaAutocomplete } from './AlgoliaAutocomplete';

function SearchIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
      <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
    </svg>
  );
}

export function Search({ handleAlgoliaOpen }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    handleAlgoliaOpen(); // Hide the Search component
  };

  return (
    <div>
      <button
        className="md:bg-white/60 md:hover:bg-white/80 group flex w-7 items-center justify-start transition-all duration-200 ease-in-out h-auto md:w-80 md:flex-none md:rounded-lg sm:py-2.5 md:py-2 md:pl-4 md:pr-3.5 text-sm md:ring-1 ring-white hover:ring-gray-800/30 ring-inset lg:w-96"
        onClick={handleClick}
      >
        <SearchIcon className="flex-none transition-all duration-200 ease-in-out w-7 h-7 sm:w-5 sm:h-5 md:group-hover:fill-gray-950 fill-gray-900 brightness-200" />
        <span className="hidden text-sm text-gray-500 md:ml-2 md:block lg:hidden">
          Søk etter sang...
        </span>
        <span className="hidden text-sm text-gray-600 transition-all duration-200 ease-in-out group-hover:text-gray-700 lg:block md:ml-2">
          Søk etter sang tittel, komponist eller tekst...
        </span>
      </button>
      {open && <AlgoliaAutocomplete open={open} setOpen={setOpen} />}
    </div>
  );
}
