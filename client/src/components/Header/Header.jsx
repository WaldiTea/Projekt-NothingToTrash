import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <h1 className="logo">nothingtotrash</h1>
        <ul className="link-list">
          <li>Marktplatz</li>
          <li>Über Uns</li>
        </ul>
      </nav>
      <div className="login-wrapper">
        <a href="#">Log In</a>
        <Button text="Registriere Dich" style="button button-purple" />
      </div>
    </header>
  );
}

export default Header;