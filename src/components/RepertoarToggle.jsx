import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CategoryDropdown } from './CategoryDropdown';
import { LanguageDropdown } from './LanguageDropdown';
import { RepertoireList } from './RepertoireList';
import { filterSongs } from '../../utilities/filterSongs';

export function RepertoarToggle() {
  const [repertoire, setRepertoire] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  // const [selectedArrangement, setSelectedArrangement] = useState('');

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

  // const handleArrangementChange = (newArrangement) => {
  //   setSelectedArrangement(newArrangement);
  // };

  const filteredRepertoire = repertoire.filter((song) =>
    filterSongs(song, selectedCategory, selectedLanguage)
  );

  const filterControlsRef = useRef(null);
  const repertoireListRef = useRef(null);

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

          <div className="pt-12 sm:pb-4" ref={filterControlsRef}>
            <div className="flex space-x-4 text-sm">
              <CategoryDropdown
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
              />
              <LanguageDropdown handleLanguageChange={handleLanguageChange} />
            </div>
          </div>
        </div>

        <RepertoireList
          ref={repertoireListRef}
          repertoire={filteredRepertoire}
          selectedCategory={selectedCategory}
          selectedLanguage={selectedLanguage}
          // selectedArrangement={selectedArrangement}
        />

        <div className="pt-6">
          <div className="px-6 py-3.5 rounded-lg border border-slate-400/10 bg-slate-50 w-fit">
            <p className="text-sm text-gray-700">
              Viser{' '}
              <span className="font-medium">{filteredRepertoire.length}</span>{' '}
              sanger
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
