export interface CharacterBase {
  character_name: string;
  character_birth_year: string;
  character_homeworld: string;
  character_gender: string;
  character_height: string;
  character_mass: string;
  character_eye_color: string;
  character_skin_color: string;
  character_hair_color: string;
  character_url: string;
}

export interface StarWarsResponse {
  results: CharacterBase[];
}

async function fetchData(searchStr: string, perPage: number): Promise<StarWarsResponse | undefined> {
  const response = await fetch(`https://swapi.dev/api/people/?search=${searchStr}&page=1&limit=${perPage}`);
  const data = await response.json();
  return data;
}

export { fetchData };
