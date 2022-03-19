import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRreader from "./QRreader";
import Creator from "./Creator";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
