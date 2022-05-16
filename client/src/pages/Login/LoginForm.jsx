import { useState } from "react";
import { apiBaseUrl } from "../../api/api";

const LoginForm = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")
  const loginUser = (event) => {
    event.preventDefault()

    fetch(apiBaseUrl + "/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
      if(!data.err) {
        props.loginSuccess(data.token)
        return
      }

      if(data.err.validationErrors) {
        const firstError = data.err.validationErrors[0]
        setError(firstError.msg + ": " + firstError.param)
        return
      }

      setError(data.err.message)  
    })
  }

  return (
    <div>
      <form>
        <div className="form-floating mb-3">
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" autoComplete="off"/>
          <label htmlFor="floatingInput">Username or Email</label>
        </div>
        <div className="form-floating mb-3">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" autoComplete="off" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button onClick={loginUser} type="submit">Anmelden</button>
        {error && <p className="text-danger">{error}</p>}
      </form>
    </div>
  );
}

export default LoginForm;