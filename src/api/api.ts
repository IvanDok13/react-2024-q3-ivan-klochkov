export interface CharacterBase {
  name: string;
  birth_year: string;
  homeworld: string;
  gender: string;
  height: string;
  mass: string;
  eye_color: string;
  skin_color: string;
  hair_color: string;
  url: string;
}

export interface StarWarsResponse {
  results: CharacterBase[];
}

async function fetchData(searchStr: string, perPage: number = 1): Promise<StarWarsResponse> {
  const response = await fetch(`https://swapi.dev/api/people/?search=${searchStr}&page=1&limit=${perPage}`);
  try {
    if (!response.ok) {
      throw new Error('No data found');
    }
    const data = response.json();
    return data;
  } catch (error: unknown) {
    throw new Error('Error');
  }
}

export { fetchData };
