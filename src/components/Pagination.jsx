export function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
  filterControlsRef,
  totalSongs, // New prop
}) {
  const handleNavigation = (action) => {
    if (action === 'previous') {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    } else {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }
    filterControlsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const endSongNumber =
    currentPage === totalPages ? totalSongs : currentPage * 10;

  return (
    <nav
      className="flex items-center justify-between px-0 pt-6 pb-3 bg-white border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Viser{' '}
          <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> til{' '}
          <span className="font-medium">{endSongNumber}</span> av{' '}
          <span className="font-medium">{totalSongs}</span> sanger
        </p>
      </div>
      <div className="flex justify-between flex-1 sm:justify-end">
        <button
          className={`relative inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${
            currentPage === 1
              ? 'cursor-not-allowed'
              : 'hover:bg-amber-50 hover:ring-amber-700/20 transition ease-in-out duration-150 hover:text-amber-800'
          }`}
          disabled={currentPage === 1}
          onClick={() => handleNavigation('previous')}
        >
          Forrige
        </button>
        <div className="flex items-center sm:hidden">
          <p className="text-sm text-gray-700">
            <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> –{' '}
            <span className="font-medium">{endSongNumber}</span> av{' '}
            <span className="font-medium">{totalSongs}</span> sanger
          </p>
        </div>
        <button
          className={`relative ml-3 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 ${
            currentPage === totalPages
              ? 'cursor-not-allowed'
              : 'hover:bg-amber-50 hover:ring-amber-700/20 transition ease-in-out duration-150 hover:text-amber-800'
          }`}
          disabled={currentPage === totalPages}
          onClick={() => handleNavigation('next')}
        >
          Neste
        </button>
      </div>
    </nav>
  );
}
