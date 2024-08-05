export default function FormInput(props) {
  const { id, type, name, value, handleInputChange } = props;
  return (
    <input
      id={id ? id : name}
      type={type}
      name={name}
      value={value}
      onChange={handleInputChange}
    />
  );
}
