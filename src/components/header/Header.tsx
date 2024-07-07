import { Component } from 'react';
import logo from '../../../public/logo-movie.svg';
import './Header.css';

interface SearchBarProps {
  onSearch: (searchLine: string) => void;
}

interface SearchBarState {
  searchLine: string;
}

class Header extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchLine: '',
    };
  }

  handleSearch = (): void => {
    const trimStr: string = this.state.searchLine.trim();
    localStorage.setItem('luc', trimStr);
    this.props.onSearch(trimStr);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchLine: event.target.value });
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };
  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <img src={logo} className="header__logo" alt="logo" />
          <div className="header__search">
            <input
              className="header__search-str"
              type="text"
              placeholder="Search"
              value={this.state.searchLine}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyPress}
            />
            <button className="header__search-btn" onClick={this.handleSearch}>
              Go
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
