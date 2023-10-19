export function TableHeader() {
  return (
    <thead>
      <tr>
        <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
          Sangtittel
        </th>
        <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell">
          Komponist
        </th>
        <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
          Arrangement
        </th>
        <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
          Kategori
        </th>
        <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
          <span className="sr-only">Les mer</span>
        </th>
      </tr>
    </thead>
  );
}
