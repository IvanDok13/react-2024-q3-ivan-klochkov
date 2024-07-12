import { Component } from 'react';
import { StarWarsResponse, fetchData } from '../../api/api.ts';
import './Main.css';

interface MainProps {
  searchStr: string;
  perPage: number;
}

interface MainState {
  data: StarWarsResponse | null;
  error: string | null;
}

class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      data: null,
      error: null,
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async componentDidMount() {
    this.fetchData();
  }

  async componentDidUpdate(prevProps: MainProps) {
    if (prevProps.searchStr !== this.props.searchStr) {
      this.fetchData();
    }
  }

  async fetchData() {
    this.setState({ data: null, error: null });
    const { searchStr, perPage } = this.props;
    try {
      const data = await fetchData(searchStr, perPage);
      this.setState({ data });
    } catch (error) {
      this.setState({ error: 'Failed to fetch characters' });
    }
  }
  render() {
    const { data, error } = this.state;

    if (error) {
      return <div className="loading">{error}</div>;
    }

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
          {characters.length ? (
            characters.map(person => (
              <div className="main__card" key={person.name}>
                <h2 className="main__card-name">
                  Name: <span className="main__card-span">{person.name}</span>
                </h2>

                <p className="main__card-info">
                  Gender: <span className="main__card-span">{person.gender}</span>
                </p>
                <p className="main__card-info">
                  Height: <span className="main__card-span">{person.height}</span>
                </p>
                <p className="main__card-info">
                  Mass: <span className="main__card-span">{person.mass}</span>
                </p>
                <p className="vertical">
                  Birth year: <span className="main__card-span">{person.birth_year}</span>
                </p>
              </div>
            ))
          ) : (
            <div className="loading">No characters found</div>
          )}
        </div>
      </main>
    );
  }
}

export default Main;
