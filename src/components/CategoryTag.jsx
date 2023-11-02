export function CategoryTag({ category, categoryVariable = 'category' }) {
  const categoryStyles = {
    Salmer: 'text-lime-700 bg-lime-50 ring-lime-600/20',
    Pop: 'text-yellow-700 bg-yellow-50 ring-yellow-600/20',
    Viser: 'text-sky-700 bg-sky-50 ring-sky-600/20',
    Klassisk: 'text-rose-700 bg-rose-50 ring-rose-600/20',
    Musikal: 'text-emerald-700 bg-emerald-50 ring-emerald-600/20',
    'Rock/Soul/R&B': 'text-purple-700 bg-purple-50 ring-purple-600/20',
    Folkemusikk: 'text-indigo-700 bg-indigo-50 ring-indigo-600/20',
    Jazz: 'text-fuchsia-700 bg-fuchsia-50 ring-fuchsia-600/20',
  };

  return (
    <div
      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ring-1 ring-inset ring-600/20 ${
        categoryStyles[category[categoryVariable]]
      }`}
    >
      {category[categoryVariable]}
    </div>
  );
}
