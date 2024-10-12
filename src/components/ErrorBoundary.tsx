import React, { ErrorInfo, ReactNode } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    // Log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={4}>
          <Heading as="h2" size="xl" mb={4}>Oops! Something went wrong.</Heading>
          <Text>We're sorry for the inconvenience. Please try refreshing the page or contact support if the problem persists.</Text>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;