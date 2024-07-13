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
