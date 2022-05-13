import Button from "../Button/Button";
import InputField from "./InputField";

const Formular = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="formular">
      <h3 className="form-title">Mit Email anmelden</h3>
      <InputField type="email" placeholder="Email" />
      <InputField type="password" placeholder="Passwort" />
      <Button text="Registrieren" style="button button-blue" />
    </form>
  );
}

export default Formular;