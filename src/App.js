import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Inquiry from './pages/Inquiry.jsx';
import Location from './pages/Location.jsx';
import Login from './pages/Login.jsx';
import Search from './pages/Search.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/Inquiry" element={<Inquiry />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Inquiry" element={<Inquiry />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;