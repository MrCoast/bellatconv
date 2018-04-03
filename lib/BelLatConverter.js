const mapping = {
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'H',
  'Ґ': 'G',
  'Д': 'D',
  'Е': 'Ie',
  'Ё': 'Jo',
  'Ж': 'Ž',
  'З': 'Z',
  'І': 'I',
  'И': 'I',
  'Й': 'J',
  'К': 'K',
  'Л': 'Ł',
  'М': 'M',
  'Н': 'Ń',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'Ś',
  'Т': 'T',
  'У': 'U',
  'Ў': 'Ŭ',
  'Ф': 'F',
  'Х': 'Ch',
  'Ц': 'Ć',
  'Ч': 'Č',
  'Ш': 'Š',
  'Ы': 'Y',
  'Ь': '',
  'Э': 'E',
  'Ю': 'Ju',
  'Я': 'Ja',
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'h',
  'ґ': 'g',
  'д': 'd',
  'е': 'ie',
  'ё': 'jo',
  'ж': 'ž',
  'з': 'z',
  'і': 'i',
  'и': 'i',
  'й': 'j',
  'к': 'k',
  'л': 'ł',
  'м': 'm',
  'н': 'ń',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 'ś',
  'т': 't',
  'у': 'u',
  'ў': 'ŭ',
  'ф': 'f',
  'х': 'ch',
  'ц': 'ć',
  'ч': 'č',
  'ш': 'š',
  'ы': 'y',
  'ь': '',
  'э': 'e',
  'ю': 'ju',
  'я': 'ja',
};

/**
 * @param string cyrillicText
 *
 * @return string
 */
function convertFromCyrillicToLatin(cyrillicText) {
  let latinText = '';

  for (let currentCharIndex = 0; currentCharIndex < cyrillicText.length; currentCharIndex++) {
    const currentCyrillicChar = cyrillicText[currentCharIndex];
    const currentLatinChar = mapping[currentCyrillicChar];

    latinText += typeof currentLatinChar !== 'undefined' ? currentLatinChar : currentCyrillicChar;
  }

  return latinText;
}

module.exports.convertFromCyrillicToLatin = convertFromCyrillicToLatin;

