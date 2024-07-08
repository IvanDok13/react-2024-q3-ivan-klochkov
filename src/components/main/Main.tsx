import { Component } from 'react';
import { StarWarsResponse, fetchData } from '../../api/api.ts';

interface Props {
  searchStr: string;
  perPage: number;
}

interface State {
  data: StarWarsResponse | null;
}

class Main extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: null,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async componentDidMount() {
    this.fetchData();
  }

  async componentDidUpdate(prevProps: Props) {
    if (prevProps.searchStr !== this.props.searchStr) {
      this.fetchData();
    }
  }

  async fetchData() {
    this.setState({ data: null });
    const { searchStr, perPage } = this.props;
    const data = await fetchData(searchStr, perPage);
    this.setState({ data });
  }
  render() {
    const { data } = this.state;

    if (!data) {
      return <div className="main__loading">Loading...</div>;
    }

    if (!data.results) {
      return <div className="loading">Try another search</div>;
    }

    const characters = data.results;

    return (
      <main className="main">
        <div className="main__wrapper">
          {characters.map(person => (
            <div className="main__card" key={person.name}>
              <p className="main__card-name">Name: {`${person.name}`}</p>
              <p className="main__card-info">Birth year: {person.birth_year}</p>
              <p className="main__card-info">Homeworld: {person.homeworld}</p>
              <p className="main__card-info">Gender: {person.gender}</p>
              <p className="main__card-info">Height: {person.height}</p>
              <p className="main__card-info">Mass: {person.mass}</p>
              <p className="main__card-info">Eye color: {person.eye_color}</p>
              <p className="main__card-info">Skin color: {person.skin_color}</p>
              <p className="main__card-info">Hair color: {person.hair_color}</p>
              <p className="main__card-info">URL: {person.url}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
