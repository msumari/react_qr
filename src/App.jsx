import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRreader from "./QRreader";
import Creator from "./Creator";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/reader" element={<QRreader />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
