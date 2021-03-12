/*
    You're given a string of available characters and a string representing a document
    Write a function that determines if you can generate the document using the available characters
    If you can = return true; otherwise, it should return false
 */

function generateDocument(characters, document) {
    let charsCount = {};

    for (const char of document) {
        const charactersCountLetters = countCharacters(char, characters);
        const documentCountLetters = countCharacters(char, document);

        if (documentCountLetters > charactersCountLetters) {
            return false;
        }
    }

    return true;
}

function countCharacters(character, text) {
    let frequency = 0;
    for (const char of text) {
        if (char === character) {
            frequency++;
        }
    }
    return frequency;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;