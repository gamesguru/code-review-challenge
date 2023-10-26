type Character = {
  name: string;
};

let cache: Character;

// TODO: no tests (for getCharacter), advised to add unit testing framework

export const getCharacter = (): Promise<Character> => {
  if (cache) {
    console.info("Using Cache!")
    return cache;
  } else {
    return fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => {
        cache = data;

        // NOTE: that this occurs asyncrhonously now (after Bravo log)
        console.info("response data: " + JSON.stringify(data));

        // Test that data meets our contract
        // TODO: add better type checking (is name only requirement?  Or other properties?)
        if (typeof (data["name"]) !== 'string') {
          throw new Error("'Name' property missing.");
        };

        return data;
      }).catch(error => {
        console.error("Failed to retrieve data from API: " + error.stack);
        throw new Error(error);
      });
  }
};
