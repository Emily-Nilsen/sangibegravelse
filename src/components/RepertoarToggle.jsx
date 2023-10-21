import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CategoryDropdown } from './CategoryDropdown';
import { LanguageDropdown } from './LanguageDropdown';
import { ArrangementDropdown } from './ArrangementDropdown';
import { RepertoireList } from './RepertoireList';

export function RepertoarToggle() {
  const [repertoire, setRepertoire] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedArrangement, setSelectedArrangement] = useState('');

  useEffect(() => {
    fetch('/api/repertoire')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch repertoire.');
        return response.json();
      })
      .then((data) => {
        const collator = new Intl.Collator('nb');
        setRepertoire(data.sort((a, b) => collator.compare(a.title, b.title)));
      })
      .catch((error) => {
        console.error(error);
        // Implement an error message or a notification for the user here.
      });
  }, []);

  // Filter function to apply selected filters
  const filterSongs = (song) => {
    if (selectedCategory !== 'Alle' && song.category !== selectedCategory) {
      return false;
    }
    console.log('Filtering song:', song.title);
    console.log('Selected Arrangement:', selectedArrangement);
    if (
      selectedArrangement &&
      selectedArrangement !== 'Alle' &&
      !song.arrangement.some(
        (arr) => arr.toLowerCase() === selectedArrangement.toLowerCase()
      )
    ) {
      console.log('Filtered out by Arrangement:', song.title);
      return false;
    }

    if (selectedLanguage && song.language !== selectedLanguage) {
      return false;
    }
    return true;
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage);
  };

  const handleArrangementChange = (selectedArrangement) => {
    setSelectedArrangement(selectedArrangement);
  };

  const [expandedSongs, setExpandedSongs] = useState([]);

  const toggleSong = (songId) => {
    setExpandedSongs((prevExpandedSongs) => {
      if (prevExpandedSongs.includes(songId)) {
        return prevExpandedSongs.filter((id) => id !== songId);
      } else {
        return [...prevExpandedSongs, songId];
      }
    });
  };

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
          <div className="pt-12 sm:pb-4">
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
          repertoire={repertoire}
          selectedCategory={selectedCategory}
          selectedLanguage={selectedLanguage}
          selectedArrangement={selectedArrangement}
        />
      </div>
    </section>
  );
}
