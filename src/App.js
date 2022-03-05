import './App.css';
import Header from "./Header"
import Home from "./Home"
import Contact from "./Contact"
import Music from "./Music"
import Projects from "./Projects"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/music" element={<Music />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
