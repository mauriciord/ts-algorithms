function caesarCipherEncryptor(string, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetLength = alphabet.length;
  const newChars = [];
  const newKey = key % alphabetLength;
  for (const letter of string) {
    newChars.push(getNewChars(letter, newKey, alphabet));
  }

  return newChars.join("");
}

function getNewChars(letter, key, alphabet) {
  const alphabetLength = alphabet.length;
  const newCharCode = alphabet.indexOf(letter) + key;
  return alphabet[newCharCode % alphabetLength];
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
