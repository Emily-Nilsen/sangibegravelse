import { createContext, useContext, useState } from 'react';
import { LyricsIcon } from './icons/Lyrics';

function ArrowDownIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m17 14-5 5-5-5M12 18.5V5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
          className="inline-flex items-center px-3.5 py-1.5 mt-0 text-sm font-medium rounded-md text-amber-800 bg-amber-50 ring-1 ring-inset ring-amber-600/20"
          onClick={toggleExpand}
        >
          {children}&nbsp;
          <LyricsIcon className="w-4 h-4 fill-amber-700" />
        </button>
      ) : (
        // Render a close button when expanded
        <button
          type="button"
          className="inline-flex items-center px-3.5 py-1.5 mt-0 text-sm font-medium rounded-md text-slate-800 bg-slate-50 ring-1 ring-inset ring-slate-600/20"
          onClick={closeExpand}
        >
          Skjul tekst
        </button>
      )}
    </div>
  );
};
