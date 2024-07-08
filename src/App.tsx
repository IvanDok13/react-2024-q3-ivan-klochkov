import { Component, ComponentPropsWithRef } from 'react';
import Header from './components/header/Header.tsx';
import Main from './components/main/Main.tsx';

interface AppProps {
  searchStr: string;
}

class App extends Component<ComponentPropsWithRef<'div'>, AppProps> {
  constructor(props: ComponentPropsWithRef<'div'>) {
    super(props);
    this.state = {
      searchStr: localStorage.getItem('searchStr') || '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (searchStr: string) => {
    this.setState({ searchStr });
  };

  render() {
    return (
      <div>
        <Header onSearch={this.handleSearch} />
        <Main searchStr={this.state.searchStr} perPage={0} />
      </div>
    );
  }
}

export default App;
