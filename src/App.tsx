import { Component } from 'react';
import Header from './components/header/Header.tsx';

class App extends Component {
  handleSearch = (searchLine: string): void => {
    alert(searchLine);
  };

  render() {
    return (
      <div>
        <Header onSearch={this.handleSearch} />
      </div>
    );
  }
}

export default App;
