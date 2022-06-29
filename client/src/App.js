import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateActivity from "./components/CreateActivity";
import Details from "./components/Details";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/create" element={<CreateActivity />} />
        <Route path=":id" element={<Details />} />
        <Route path="/home/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
