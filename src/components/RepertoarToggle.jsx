import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CategoryDropdown } from './CategoryDropdown';
import { LanguageDropdown } from './LanguageDropdown';
import { ArrangementDropdown } from './ArrangementDropdown';
import { RepertoireList } from './RepertoireList';
import { Pagination } from './Pagination';
import { filterSongs } from '../../utilities/filterSongs';

export function RepertoarToggle() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [repertoire, setRepertoire] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedArrangement, setSelectedArrangement] = useState('');

  useEffect(() => {
    fetch('/api/repertoire')
      .then((response) => {
        if (!response.ok) throw new Error('Kunne ikke hente repertoar.');
        return response.json();
      })
      .then((data) => {
        const collator = new Intl.Collator('nb');
        setRepertoire(data.sort((a, b) => collator.compare(a.title, b.title)));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };

  const handleArrangementChange = (newArrangement) => {
    setSelectedArrangement(newArrangement);
  };

  const filteredRepertoire = repertoire.filter((song) =>
    filterSongs(song, selectedCategory, selectedLanguage, selectedArrangement)
  );
  const totalPages = Math.ceil(filteredRepertoire.length / itemsPerPage);
  const currentItems = filteredRepertoire.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const filterControlsRef = useRef(null);

  return (
    <section>
      <div className="px-4 pt-24 pb-16 overflow-hidden max-w-screen sm:px-6 lg:px-8 sm:py-32">
        <div>
          <div className="max-w-2xl lg:flex-auto">
            <p className="text-base font-medium leading-7 text-slate-600">
              Utforsk vår omfattende
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Repertoar for begravelsessang
            </h1>
            <motion.p
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: 'fade',
              }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Få mer informasjon om hver sang ved å klikke på plusssymbolet og
              lytt til våre eksempler.
            </motion.p>
          </div>
          {/* Filter controls */}
          <div className="pt-12 sm:pb-4" ref={filterControlsRef}>
            <div className="flex space-x-4 text-sm">
              <CategoryDropdown
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
              />
              {/* Subcategory */}
              <LanguageDropdown handleLanguageChange={handleLanguageChange} />
              <ArrangementDropdown
                handleArrangementChange={handleArrangementChange}
              />
            </div>
          </div>
        </div>

        {/* Repertoire list */}
        <RepertoireList
          repertoire={currentItems}
          selectedCategory={selectedCategory}
          selectedLanguage={selectedLanguage}
          selectedArrangement={selectedArrangement}
        />

        {/* Pagination controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          filterControlsRef={filterControlsRef}
          totalSongs={filteredRepertoire.length} // New prop
        />
      </div>
    </section>
  );
}
