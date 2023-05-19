import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/dashboard' exact element={<Sidebar />} />
      </Routes>
      </BrowserRouter>
          </div>
  );
}

export default App;
