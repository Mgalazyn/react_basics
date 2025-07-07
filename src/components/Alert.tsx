import { ReactNode } from "react";
import { useState } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="alert alert-info alert-dismissible fade show" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="aler"
        aria-label="Close"
        onClick={() => setShow(false)}
      ></button>
    </div>
  );
};

export default Alert;
// This component is used to display alerts in the application.
