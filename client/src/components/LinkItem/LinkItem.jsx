import { Link } from "react-router-dom";

const LinkItem = (props) => {
  return (
    <Link to={props.to}>{props.text}</Link>
  );
}

export default LinkItem;