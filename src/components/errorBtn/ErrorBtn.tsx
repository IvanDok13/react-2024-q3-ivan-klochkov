import { Component, ReactNode } from 'react';
import './ErrorBtn.css';

interface ErrBtnProps {
  children?: ReactNode;
}

interface ErrBtnState {
  clicked: boolean;
}

class ButtonWithError extends Component<ErrBtnProps, ErrBtnState> {
  state: ErrBtnState = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: true });
  };

  render() {
    if (this.state.clicked) {
      throw new Error('Imitate error...');
    }
    return (
      <button onClick={this.handleClick} className="btn-error">
        ErrorBoundaryBtn
      </button>
    );
  }
}

export default ButtonWithError;
