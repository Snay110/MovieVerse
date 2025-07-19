interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div style={{ color: "red", textAlign: "center", padding: "1rem" }}>
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorMessage;
