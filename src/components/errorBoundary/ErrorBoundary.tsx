import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  err: Error | null;
  errInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    err: null,
    errInfo: null,
  };

  componentDidCatch(err: Error, errInfo: ErrorInfo) {
    this.setState({
      err: err,
      errInfo: errInfo,
    });
  }

  render() {
    if (this.state.errInfo) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
