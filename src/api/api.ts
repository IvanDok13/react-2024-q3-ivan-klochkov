import { StarWarsResponse } from '../types/character.interface.ts';

export async function fetchData(searchStr: string, perPage: number = 1): Promise<StarWarsResponse> {
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
