import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import './styles/css/main.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
