import RegisterForm from "./RegisterForm";
import { Link } from "react-router-dom";

const Registration = () => {
    return (
      <div>
        <div>
          <div>
            <h5>
              Registriere dich, um die Fotos und Videos deiner Freunde zu sehen.
            </h5>
          </div>

          <div>
            <RegisterForm />
          </div>
        </div>
        <Link to='/'>
          <button type="btn">Du hast ein Konto? Melde dich an.</button>
        </Link>
      </div>
    );
}

export default Registration;