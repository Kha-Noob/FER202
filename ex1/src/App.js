import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import AccountPage from './pages/AccountPage';
import FooterPage from './pages/FooterPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>

        {/* ✅ Footer luôn xuất hiện trên mọi trang */}
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
