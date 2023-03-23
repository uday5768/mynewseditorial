import "./App.css";
import Top from "./components/top";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import National from "./components/National";
import International from "./components/International";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Sports from "./components/Sports";
import Reviews from "./components/Reviews";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/National" element={<National />} />
        <Route path="/International" element={<International />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Entertainment" element={<Entertainment />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/Notes" element={<Notes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
