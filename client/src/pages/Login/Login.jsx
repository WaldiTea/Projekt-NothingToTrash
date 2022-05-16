import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <div role="document">
      <div>
        <div>
          <h2>Finstagram</h2>
        </div>

        <div>
          <LoginForm loginSuccess={props.loginSuccess} />
        </div>
      </div>
      <Link to={'/'}>
        <button type="btn">Du hast kein Konto? Registrieren</button>
      </Link>
    </div>
  );
}

export default Login;
