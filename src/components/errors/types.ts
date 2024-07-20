import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export enum ETextError {
  CAUGHT_ERR = 'ErrorBoundary caught an error',
  UI_ERR = 'Ooops. An unexpected error occurred. Restart the application!',
  FETCH_ERR = 'Error fetch data',
  TRIGGER_ERR = 'Triggered Error',
  NETWORK_ERR = 'Network not ok',
  LOCALSTORAGE_ERR = 'Error parsing localStorage value for key',
}
