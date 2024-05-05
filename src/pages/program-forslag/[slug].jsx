import { useRouter } from 'next/router';

// Import your suggestions data
import { suggestions } from '@/components/ForslagPreview';

export default function SuggestionPage({ suggestion }) {
  const router = useRouter();

  // If the page is not yet generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="text-3xl font-bold">{suggestion.name}</h1>
      <p>{suggestion.solo_1}</p>
      <p>{suggestion.salme_1}</p>
      {/* Render more fields as needed */}
    </div>
  );
}

export async function getStaticPaths() {
  // Create paths from suggestions ids
  const paths = suggestions.map((suggestion) => ({
    params: { slug: suggestion.id.toString() },
  }));

  return {
    paths,
    fallback: true, // or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const suggestion = suggestions.find(
    (suggestion) => suggestion.id.toString() === params.slug
  );

  // Return suggestion as a prop
  return {
    props: { suggestion },
  };
}
