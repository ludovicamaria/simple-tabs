import type { ErrorProps } from "../interfaces/errorProps";

export const ErrorComponent = (errorProps: ErrorProps) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative top-5 mb-2"
      role="alert"
    >
      <span className="block sm:inline">{errorProps.errorMessage}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
      </span>
    </div>
  );
};

export default ErrorComponent;
