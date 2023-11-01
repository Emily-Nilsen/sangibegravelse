// src/utils/generateSlug.js

const specialCharMap = {
  // German characters
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
  ß: 'ss',

  // French characters
  é: 'e',
  è: 'e',
  ê: 'e',
  ë: 'e',
  ç: 'c',
  ô: 'o',
  î: 'i',
  ï: 'i',
  û: 'u',
  ù: 'u',

  // Spanish characters
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  ñ: 'n',

  // Italian characters
  à: 'a',
  è: 'e',
  ì: 'i',
  ò: 'o',
  ù: 'u',

  // Scandinavian characters
  å: 'a',
  æ: 'ae',
  ø: 'o',
  œ: 'oe',

  // Portuguese characters
  ã: 'a',
  õ: 'o',
  ç: 'c',

  // Czech characters
  č: 'c',
  ř: 'r',
  š: 's',
  ž: 'z',
  ů: 'u',

  // Others
  ł: 'l',
  ć: 'c',
  ś: 's',
  ź: 'z',
  ń: 'n',
  đ: 'd',
};

function replaceSpecialCharacters(str) {
  return str
    .split('')
    .map((char) => specialCharMap[char] || char)
    .join('');
}

function generateSlug(title, composer) {
  const normalizedTitle = replaceSpecialCharacters(title);
  const normalizedComposer = replaceSpecialCharacters(composer);

  const slug = `${normalizedTitle}-av-${normalizedComposer}`
    .toLowerCase()
    .replace(/[\s+]/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  return slug;
}

module.exports = { generateSlug };
