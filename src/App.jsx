import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import TextPage from "./components/TextPage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<TextPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
