import { Component, ErrorInfo, ReactNode } from 'react';
import ErrContent from './errorContent/ErrorContent.tsx';
import { ErrorBoundaryProps, ErrorBoundaryState, ETextError } from './types.ts';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(err: Error, errInfo: ErrorInfo): void {
    console.error(ETextError.CAUGHT_ERR, err, errInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <ErrContent />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
