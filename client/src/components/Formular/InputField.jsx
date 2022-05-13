const InputField = (props) => {
  return (
    <input className="input-field" type={props.type} placeholder={props.placeholder} />
  );
}

export default InputField;