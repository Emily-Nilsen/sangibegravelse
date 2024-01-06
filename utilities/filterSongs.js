export const filterSongs = (
  song,
  selectedCategory,
  selectedLanguage,
  selectedArrangement
) => {
  if (
    selectedCategory &&
    song.category !== selectedCategory &&
    selectedCategory !== 'Alle'
  )
    return false;
  if (
    selectedArrangement &&
    selectedArrangement !== 'Alle' &&
    !song.arrangement.some(
      (arr) => arr.toLowerCase() === selectedArrangement.toLowerCase()
    )
  )
    return false;

  if (
    selectedLanguage &&
    selectedLanguage !== 'Alle' &&
    !song.language.includes(selectedLanguage)
  )
    return false;
  return true;
};
