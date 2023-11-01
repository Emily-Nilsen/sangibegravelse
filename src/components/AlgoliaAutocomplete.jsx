import { useEffect, useRef, useState, forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';
import { createAutocomplete } from '@algolia/autocomplete-core';
import algoliasearch from 'algoliasearch/lite';
import Highlighter from 'react-highlight-words';

export function AlgoliaAutocomplete({ open, setOpen }) {
  const router = useRouter();
  const [autocomplete, autocompleteState] = useAlgoliaAutocomplete();
  const formRef = useRef(null);
  const panelRef = useRef(null);
  const inputRef = useRef(null);

  return (
    <Dialog
      as="div"
      className="fixed inset-0 z-30"
      open={open}
      onClose={() => setOpen(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <form
          ref={formRef}
          className="fixed w-11/12 p-4 overflow-auto rounded-lg sm:mx-auto bg-white/80 top-24 lg:w-1/2 sm:w-2/3"
        >
          <SearchInput
            autocomplete={autocomplete}
            autocompleteState={autocompleteState}
          />
          <div
            ref={panelRef}
            className="mt-4 border rounded-lg border-white/50"
          >
            <SearchResults
              autocomplete={autocomplete}
              query={autocompleteState.query}
              setOpen={setOpen} // Pass down setOpen
            />
          </div>
        </form>
      </div>
    </Dialog>
  );
}

function useAlgoliaAutocomplete() {
  const [autocompleteState, setAutocompleteState] = useState({});
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
  );

  const [autocomplete] = useState(() =>
    createAutocomplete({
      onStateChange: ({ state }) => {
        setAutocompleteState(state);
      },
      getSources: async ({ query }) => {
        const results = await searchClient
          .search([{ indexName: 'sang_i_begravelse', query }])
          .then(({ results }) => results[0].hits);
        return [
          {
            sourceId: 'songs',
            getItems: () => results,
          },
        ];
      },
    })
  );

  return [autocomplete, autocompleteState];
}

const SearchInput = forwardRef(function SearchInput(
  { autocomplete, autocompleteState },
  inputRef
) {
  let inputProps = autocomplete.getInputProps({});
  return (
    <div className="relative flex h-12">
      <input
        ref={inputRef}
        className="flex-auto pl-4 overflow-auto border border-gray-200 rounded-lg outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-200 focus:ring-offset-1 focus:ring-offset-gray-50"
        {...inputProps}
      />
    </div>
  );
});

export function SearchResults({ query, setOpen }) {
  const [hits, setHits] = useState([]);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleLinkClick = () => {
    setOpen(false); // Close the AlgoliaAutocomplete component
  };

  // Fetch results when the query changes
  useEffect(() => {
    const fetchResults = async () => {
      const searchClient = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
      );
      const results = await searchClient
        .search([{ indexName: 'sang_i_begravelse', query }])
        .then(({ results }) => results[0].hits);
      setHits(results);
    };

    if (query) fetchResults();
  }, [query]);

  if (hits.length === 0) {
    return (
      <div className="text-gray-500 px-3.5 py-2 text-sm">
        Søk etter sang tittel, komponist eller tekst...
      </div>
    );
  }

  return (
    <div className="relative z-40 space-y-0 overflow-y-auto max-h-[calc(100vh-15rem)] rounded-lg bg-white/80">
      {hits.map((hit, index) => (
        <div
          key={index}
          className="p-4 overflow-y-scroll border-b border-gray-200/50"
          onClick={handleClick}
        >
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-between leading-tight grow">
              <div>
                <Link
                  href={`/repertoar/${hit.slug}`}
                  className="leading-tight"
                  onClick={handleLinkClick}
                >
                  <Highlighter
                    className="text-sm font-medium text-gray-800 cursor-pointer hover:underline hover:text-amber-600 sm:text-base line-clamp-1 sm:line-clamp-none"
                    searchWords={[query]}
                    autoEscape={true}
                    textToHighlight={hit.title}
                    highlightClassName="text-amber-600 group-aria-selected:underline bg-transparent underline"
                  />
                </Link>
                <div className="text-xs text-gray-600 sm:text-sm line-clamp-1 sm:line-clamp-none">
                  <Highlighter
                    searchWords={[query]}
                    autoEscape={true}
                    textToHighlight={hit.composer}
                    highlightClassName="text-amber-600 group-aria-selected:underline bg-transparent"
                  />
                </div>
              </div>
              <div className="pt-2 text-xs text-gray-500">{hit.category}</div>
            </div>

            <Image
              src={hit.mobile}
              alt={hit.title}
              width={640}
              height={359}
              className="object-cover object-center w-1/5 rounded-md sm:w-1/4"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
