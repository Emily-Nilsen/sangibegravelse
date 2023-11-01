import { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Snippet,
} from 'react-instantsearch';
import Link from 'next/link';
import { generateSlug } from '../pages/repertoar/[slug]';

const Hit = ({ hit }) => (
  <div className="p-4 border-b border-gray-200/20">
    <Link
      href={`/repertoar/${hit.slug}`}
      className="text-amber-600 hover:underline"
    >
      <Highlight attribute="title" hit={hit} />
    </Link>
    <p>
      <Snippet attribute="lyrics" hit={hit} />
    </p>
  </div>
);

export function AlgoliaSearchComponent() {
  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
  );

  return (
    <InstantSearch searchClient={searchClient} indexName="sang_i_begravelse">
      <SearchBox className="my-4" />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}
