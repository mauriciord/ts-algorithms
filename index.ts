import NumbersCollection from "./NumbersCollection";
import Sorter from "./Sorter";
import CharactersCollection from "./CharactersCollection";

/**
 * Numbers example
 */
const numbersCollection = new NumbersCollection([10, 20, -3, 7, 2, 12, 1, 9, 99, 22]);
const numbersSorter = new Sorter(numbersCollection);

numbersSorter.sort();
console.log(numbersCollection.data);

/**
 * Chars example
 */
const charactersCollections = new CharactersCollection('I am practicing Typescript because the World loves it s2');
const charsSorter = new Sorter(charactersCollections);

charsSorter.sort();
console.log(charactersCollections.data);


