import "./App.css";
import Login from "./components/login";
import Signup from "./components/sign";
import Dashboard from "./components/dashboard";
import Blog from "./components/yourblog";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div className="Container">
            <h1>Hello App</h1>
          </div>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/yourblog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
