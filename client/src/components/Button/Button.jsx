const Button = (props) => {
  return (
    <button className={props.styling} onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;