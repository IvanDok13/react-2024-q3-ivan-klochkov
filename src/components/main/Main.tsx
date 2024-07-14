import { Component } from 'react';
import { StarWarsResponse, fetchData } from '../../api/api.ts';
import styles from './Main.module.css';

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
      return <div className={styles.error}>{error}</div>;
    }

    if (!data) {
      return <div className={styles.loading}>Loading...</div>;
    }

    if (!data.results) {
      return <div className={styles.loading}>Try another search</div>;
    }

    const characters = data.results;

    return (
      <main className={styles.main}>
        <div className={styles.wrapper}>
          {characters.length ? (
            characters.map(person => (
              <div className={styles.card} key={person.name}>
                <h2 className={styles.cardName}>
                  Name: <span className={styles.cardSpan}>{person.name}</span>
                </h2>

                <p className={styles.cardInfo}>
                  Gender: <span className={styles.cardSpan}>{person.gender}</span>
                </p>
                <p className={styles.cardInfo}>
                  Height: <span className={styles.cardSpan}>{person.height}</span>
                </p>
                <p className={styles.cardInfo}>
                  Mass: <span className={styles.cardSpan}>{person.mass}</span>
                </p>
                <p className={styles.vertical}>
                  Birth year: <span className={styles.cardSpan}>{person.birth_year}</span>
                </p>
              </div>
            ))
          ) : (
            <div className={styles.error}>No characters found</div>
          )}
        </div>
      </main>
    );
  }
}

export default Main;
