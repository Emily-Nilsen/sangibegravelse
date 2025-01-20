import { createContext, useContext, useState } from 'react';
import { LyricsIcon } from './icons/Lyrics';

function ArrowDownIcon(props) {
  return (
    <svg aria-hidden="true" {...props} viewBox="0 0 512 512">
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
}

function ArrowUpIcon(props) {
  return (
    <svg aria-hidden="true" {...props} viewBox="0 0 512 512">
      <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </svg>
  );
}

const ExpandableContext = createContext({
  isExpanded: false,
  toggleExpand: () => {},
  closeExpand: () => {}, // Add closeExpand function
});

export function Expandable({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prevExpanded) => !prevExpanded); // Toggle isExpanded
  };

  const closeExpand = () => {
    setIsExpanded(false); // Close the content
  };

  return (
    <ExpandableContext.Provider
      value={{
        isExpanded,
        toggleExpand, // Provide toggleExpand function
        closeExpand, // Provide closeExpand function
      }}
    >
      {children({ isExpanded })}
    </ExpandableContext.Provider>
  );
}

Expandable.Button = function Button({ children }) {
  const { isExpanded, toggleExpand, closeExpand } =
    useContext(ExpandableContext);

  return (
    <div className="inline-flex">
      {!isExpanded ? (
        <button
          type="button"
          className="inline-flex items-center px-3.5 py-1.5 mt-0 text-sm font-medium rounded-md text-amber-800 bg-amber-50 ring-1 ring-inset ring-amber-600/20 gap-x-3"
          onClick={toggleExpand}
        >
          <LyricsIcon className="w-4 h-4 fill-amber-700" />
          {children}
          <ArrowDownIcon className="w-4 h-4 fill-amber-700" />
        </button>
      ) : (
        // Render a close button when expanded
        <button
          type="button"
          className="inline-flex items-center px-3.5 py-1.5 mt-0 text-sm font-medium rounded-md text-slate-800 bg-slate-50 ring-1 ring-inset ring-slate-600/20 gap-x-3"
          onClick={closeExpand}
        >
          Skjul tekst
          <ArrowUpIcon className="w-4 h-4 fill-slate-700" />
        </button>
      )}
    </div>
  );
};
