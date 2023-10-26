type Character = {
  name: string;
};

let cache: Character;

export const getCharacter = (_callBack: (data: Character) => void) => {
  if (cache) {
    _callBack(cache);

  } else {
    // Fetch the character, since cache is lacking
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => {
        cache = data;  // TODO: validate typing, this just stuffs JSON into Character
        console.info("response data: " + JSON.stringify(data));

        // Test that data meets our contract
        if (typeof(data["name"]) !== 'string') {
          throw new Error("'Name' property missing.");
        };

        _callBack(data);
      }).catch(error => {
        console.error("Failed to retrieve data from API: " + error.stack);
        throw new Error(error);
      });
  }
};
