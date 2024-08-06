import ErrorInput from "./ErrorInput";

export default function FormInput(props) {
  const {
    id,
    label,
    type,
    name,
    value,
    handleInputChange,
    prefix,
    suffix,
    error,
  } = props;
  return (
    <>
      <div className={`ctn-input ${error != undefined ? "error-input" : ""}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <div className="ctn-input-content">
          {prefix}
          <input
            className="peer"
            id={id ? id : name}
            type={type}
            name={name}
            value={value}
            onChange={handleInputChange}
            required
          />
          {suffix}
        </div>
        {error != undefined && <ErrorInput />}
      </div>
    </>
  );
}
