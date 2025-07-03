import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <div className="alert alert-info">{children}</div>;
};

export default Alert;
// This component is used to display alerts in the application.
