import { Component, ReactNode } from "react";
import ErrorImage from "../../assets/err.png";
import { Button } from "antd";

// Helpful Link: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/

interface ErrorBoundaryProps {
  message?: string;
  children?: ReactNode;
  action?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex items-center flex-col gap-2">
          <div>
            <img src={ErrorImage} alt="error" className="object-contain h-40" />
          </div>
          <h1>
            {this.props.message ? this.props.message : "Something went wrong"}
          </h1>
          {this.props.action && (
            <Button onClick={this.props.action}>Go Back</Button>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
