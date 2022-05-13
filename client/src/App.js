import './styles/css/main.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';

import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <main className='login-page'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
