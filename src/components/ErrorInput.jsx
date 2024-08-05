export default function ErrorInput(props) {
  const { message = "This field is required" } = props;

  return <span className="error-message">{message}</span>;
}
