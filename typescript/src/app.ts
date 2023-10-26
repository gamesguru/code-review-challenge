import { getCharacter } from "./swService";

/**
 * Console.logs are not an ideal part of a production application
 * but are considered OK for the context of facilitating conversation
 * for this exercise.
 */

console.log("Alpha");

async function fetchCharacter() {
  let results = await getCharacter();
  console.log("Bravo ==>", results);
}

fetchCharacter()
  .then(() => console.log("Charlie"))
  // Manually testing that the cache works!
  .then(() => fetchCharacter());