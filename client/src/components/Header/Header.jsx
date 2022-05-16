import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import LinkItem from "../LinkItem/LinkItem";

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo"><LinkItem to="/" text="nothingtotrash" /></h1>
        <ul className="list">
          <li className="item"><LinkItem to="/" text="Marktplatz" /></li>
          <li className="item"><LinkItem to="/" text="Über Uns" /></li>
          <li className="item"><LinkItem to="/login" text="Log In" /></li>
        </ul>
        <Button styling="btn btn-md" text="Registriere Dich" onClick={() => navigate('/registration')} />
      </nav>
    </header>
  );
}

export default Header;