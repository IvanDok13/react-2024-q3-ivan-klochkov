import { Component, ReactNode } from 'react';
import styles from './ErrorBtn.module.css';

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
      <button onClick={this.handleClick} className={styles.errorBtn}>
        ErrorBoundaryBtn
      </button>
    );
  }
}

export default ButtonWithError;
