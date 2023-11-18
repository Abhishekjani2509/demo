import "./App.css";
import states from "./Data";
import Card from "./Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      States of India
      {states.map((s, index) => (
        <Card s={s} key={index} index={index} />
      ))}
    </div>
  );
}

export default App;
