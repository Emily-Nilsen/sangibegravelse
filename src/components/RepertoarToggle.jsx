import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { Expandable } from '@/components/Expandable';
import { RepertoireList } from './RepertoireList';
import { ViolinIcon } from './icons/Violin';
import { SoloIcon } from './icons/Solo';
import { DuetIcon } from './icons/Duet';

export function RepertoarToggle() {
  const [repertoire, setRepertoire] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedArrangement, setSelectedArrangement] = useState('');

  useEffect(() => {
    fetch('/api/repertoire')
      .then((response) => response.json())
      .then((data) => {
        const sortedRepertoire = data.sort((a, b) => {
          // Custom sorting function considering the Norwegian alphabet
          const collator = new Intl.Collator('nb');
          return collator.compare(a.title, b.title);
        });
        setRepertoire(sortedRepertoire);
      })
      .catch((error) => console.log(error));
  }, []);

  // Filter function to apply selected filters
  const filterSongs = (song) => {
    if (selectedCategory && song.category !== selectedCategory) {
      return false;
    }
    if (
      selectedSubcategory &&
      !song.subcategory.includes(selectedSubcategory)
    ) {
      return false;
    }
    if (
      selectedArrangement &&
      !song.arrangement.includes(selectedArrangement)
    ) {
      return false;
    }
    return true;
  };

  // Event handlers for category and arrangement selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const handleArrangementChange = (event) => {
    setSelectedArrangement(event.target.value);
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
            <div className="flex items-center space-x-4 text-sm">
              <div>
                <label
                  htmlFor="category"
                  className="text-sm font-medium leading-6 text-gray-900"
                >
                  Kategori
                </label>
                <select
                  id="category"
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Alle</option>
                  <option value="Folkemusikk">Folkemusikk</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Julesanger">Julesanger</option>
                  <option value="Klassisk">Klassisk</option>
                  <option value="Musikal">Musikal</option>
                  <option value="Opera">Opera</option>
                  <option value="Pop">Pop</option>
                  <option value="Rock/Soul/R&B">Rock/Soul/R&B</option>
                  <option value="Salmer">Salmer</option>
                  <option value="Viser">Viser</option>
                </select>
              </div>
              {/* Subcategory */}
              <div>
                <label
                  htmlFor="subcategory"
                  className="text-sm font-medium leading-6 text-gray-900"
                >
                  Språk
                </label>
                <select
                  id="subcategory"
                  name="subcategory"
                  value={selectedSubcategory}
                  onChange={handleSubcategoryChange}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Alle</option>
                  <option value="dansk">dansk</option>
                  <option value="engelsk">engelsk</option>
                  <option value="fransk">fransk</option>
                  <option value="islandisk">islandisk</option>
                  <option value="italiensk">italiensk</option>
                  <option value="latinsk">latinsk</option>
                  <option value="norsk">norsk</option>
                  <option value="spansk">spansk</option>
                  <option value="svensk">svensk</option>
                  <option value="tysk">tysk</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="arrangement"
                  className="text-sm font-medium leading-6 text-gray-900"
                >
                  Arrangement
                </label>
                <select
                  id="arrangement"
                  name="arrangement"
                  value={selectedArrangement}
                  onChange={handleArrangementChange}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-slate-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Alle</option>
                  <option value="duett">Duett</option>
                  <option value="fiolin">Fiolin</option>
                  <option value="solo">Solo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Repertoire list */}
        <RepertoireList />
      </div>
    </section>
  );
}
