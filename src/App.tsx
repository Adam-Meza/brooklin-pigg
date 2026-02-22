import "./App.css";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";

function App() {
  return (
    <main className="main-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="work/:key" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}

export default App;
